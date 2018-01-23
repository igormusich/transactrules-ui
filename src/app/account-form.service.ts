import { Injectable } from '@angular/core';
import { AccountForm } from 'app/models';

@Injectable()
export class AccountFormService {

  constructor() { }

  private accountForm:AccountForm;

  set(process:AccountForm){
      this.accountForm = process;
  }

  get():AccountForm{
      return this.accountForm;
  }

}
