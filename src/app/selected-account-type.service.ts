import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { AccountType } from 'app/models/accounttype.model';

@Injectable()
export class SelectedAccountTypeService {

  constructor() { }

  private accountType:AccountType;

  set(accountType:AccountType){
      this.accountType = accountType;
  }

  get():AccountType{
      return this.accountType;
  }

  /*
  private subject = new Subject<AccountType>();

    set(accountType: AccountType) {
        this.subject.next(accountType);
    }

    clear() {
        this.subject.next();
    }

    get(): Observable<AccountType> {
        return this.subject.asObservable();
    }
*/
}
