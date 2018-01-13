import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ApiClientService } from 'app/api-client-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldError } from 'app/errorModel/fielderror.model';

@Component({
  selector: 'vr-create-account-type',
  templateUrl: './create-account-type.component.html',
  styleUrls: ['./create-account-type.component.scss']
})
export class CreateAccountTypeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateAccountTypeComponent>,
    private apiService: ApiClientService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.form = this.fb.group({
      className: new FormControl ('', Validators.required ), // <--- the FormControl called "name"
      labelName: new FormControl ('', Validators.required )
    });
  }

  send() {
    const accountType = this.form.value;

    if(this.form.invalid){
      return;
    }

    this.apiService.createAccountType(accountType).subscribe( 
    response => {
      this.dialogRef.close( {
        'message':'Account Type created',
        'object': response.body
      } );
    },
    errorResponse => {
      if(errorResponse.status == 422){
        let fieldMap = new Map<string, string[]>(); 

        for (let index in errorResponse.error.fieldErrors) {
          var fieldError: FieldError = errorResponse.error.fieldErrors[index];
          
          let errors:String[] = fieldMap[fieldError.field];

          if(errors===undefined){
            fieldMap[fieldError.field]= [fieldError.code]; 
          }
          else {
            errors.push(fieldError.code);
          }
        }

        for (let fieldName in fieldMap){
          const control = this.form.get(fieldName);
          control.setErrors(fieldMap[fieldName]);
          control.markAsDirty();
        }
  
      //const control = this.registrationForm.get(fieldName);
      //control.setErrors(errors);
      //control.markAsDirty();
      }
    });
  }

}


