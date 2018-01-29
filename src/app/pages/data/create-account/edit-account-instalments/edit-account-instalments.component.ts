import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../../app.animation';
import { AccountCreateService } from '../../../../account-create.service'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'app/api-client-service';
import { Router } from '@angular/router';
import { InstalmentSet, Account, AccountType } from 'app/models';

@Component({
  selector: 'vr-edit-account-instalments',
  templateUrl: './edit-account-instalments.component.html',
  styleUrls: ['./edit-account-instalments.component.scss']
})
export class EditAccountInstalmentsComponent implements OnInit {

  instalment_form: FormGroup;
  accountType: AccountType;
  account: Account;

  constructor(public accountCreateService: AccountCreateService,
    private fb: FormBuilder,
    public apiClient: ApiClientService,
    public router: Router) { }

  ngOnInit() {
    this.accountType = this.accountCreateService.getAccountType();
    this.account = this.accountCreateService.getAccount();
    this.instalment_form = this.toInstalmentFormGroup(this.accountType);
  }

  toInstalmentFormGroup(accountType: AccountType): FormGroup {
    let group: any = {};

    accountType.instalmentTypes.forEach(element => {
      group[element.propertyName] = new FormControl('', Validators.required);
    });

    return new FormGroup(group);
  }

  onPreviousStep(){
    this.router.navigate(['/data/create-account/schedules']);  
  }

  onNextStep(){
    //this.router.navigate(['/data/create-account/instalments']);  
  }


}
