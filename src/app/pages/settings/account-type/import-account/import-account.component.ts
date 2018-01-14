import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ApiClientService } from 'app/api-client-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FileValidators } from 'app/core/input-file/file-validators';
import { FieldError } from 'app/errorModel/fielderror.model';
import { AccountType } from 'app/models/accounttype.model';
import { safeLoad } from 'js-yaml';
import { FileInput } from 'app/core/input-file/file-input.model';

@Component({
  selector: 'vr-import-account',
  templateUrl: './import-account.component.html',
  styleUrls: ['./import-account.component.scss']
})
export class ImportAccountComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ImportAccountComponent>,
    private apiService: ApiClientService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.form = this.fb.group({
      requiredfile: [{ value: undefined, disabled: false }, [Validators.required, FileValidators.maxContentSize(524288)]],
    });
  }

  save(result){
    var accountType: AccountType

    accountType = safeLoad(result);

    this.apiService.createAccountType(accountType).subscribe( 
    response => {
      this.dialogRef.close( {
        'message':'Account Type created',
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

  send() {

    if(this.form.invalid){
      return;
    }

    const fileControl : FileInput = this.form.get('requiredfile').value;

    const file: File =  fileControl.files[0];

    let reader = new FileReader();

    reader.onload = () => {
      this.save(reader.result);  
    };

    reader.onerror = function(err) {
      console.log(err, err.error, file);
    }

    reader.readAsText(file);
  
    
  }


}
