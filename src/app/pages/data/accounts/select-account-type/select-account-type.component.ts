import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ApiClientService } from 'app/api-client-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldError } from 'app/errorModel/fielderror.model';
import { AccountType } from 'app/models/accounttype.model';

@Component({
  selector: 'vr-select-account-type',
  templateUrl: './select-account-type.component.html',
  styleUrls: ['./select-account-type.component.scss']
})
export class SelectAccountTypeComponent implements OnInit {

  form: FormGroup;
  accountTypes: AccountType[];

  constructor(private dialogRef: MatDialogRef<SelectAccountTypeComponent>,
    private apiService: ApiClientService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      accountTypeName: new FormControl ('', Validators.required ), 
      accountNumber: new FormControl ('', Validators.required )
    });

    this.apiService.findAllAccountTypes().subscribe(accountTypes=> {
      this.accountTypes = accountTypes;
    });
  }

  create(){

    const request = this.form.value;

    if(this.form.invalid){
      return;
    }

    this.apiService.createAccountOpen(request).subscribe(
      response=> {
        this.dialogRef.close( {
          'message':'Account Open process created',
          'object': response.body
        } );
      },
      errorResponse => {
        if(errorResponse.status == 422){
          
          for (let index in errorResponse.error.fieldErrors) {
            var fieldError: FieldError = errorResponse.error.fieldErrors[index];
            
            const control = this.form.get(fieldError.field);
            var error = new Map();
            control.setErrors({ [fieldError.code] : true});
            control.markAsDirty();
          }
  
        }
      });
  }

}

