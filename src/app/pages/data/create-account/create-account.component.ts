import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { AccountType, Account } from 'app/models';
import { AccountCreateService } from '../../../account-create.service'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'app/api-client-service';


@Component({
  selector: 'vr-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class CreateAccountComponent implements OnInit {


  selectedIndex = 0;
  lastIndex = 3;
  details_form: FormGroup;
  schedule_form: FormGroup;
  instalment_form: FormGroup;

  accountType: AccountType;
  account: Account;
  calendarName: String;

  constructor(
    public accountTypeService: AccountCreateService,
    private fb: FormBuilder,
    public composeDialog: MatDialog,
    public apiClient: ApiClientService) {

  }

  ngOnInit() {
    this.accountType = this.accountTypeService.getAccountType();
    this.account = this.accountTypeService.getAccount();
    this.calendarName = this.accountTypeService.getCalendarName();
    this.details_form = this.toDetailsFormGroup(this.accountType);
    this.schedule_form = this.toScheduleFormGroup(this.accountType);
    this.instalment_form = this.toInstalmentFormGroup(this.accountType);
  }

  toDetailsFormGroup(accountType: AccountType): FormGroup {
    let group: any = {};

    accountType.dateTypes.forEach(element => {
      group[element.propertyName] =  new FormControl('', Validators.required);
    });

    accountType.amountTypes.forEach(element => {
      group[element.propertyName] = new FormControl(0, Validators.required);
    });

    accountType.rateTypes.forEach(element => {
      group[element.propertyName] = new FormControl(0, Validators.required);
    });

    accountType.optionTypes.forEach(element => {
      group[element.propertyName] =new FormControl('', Validators.required);
    });

    return new FormGroup(group);
  }

  toScheduleFormGroup(accountType: AccountType): FormGroup {
    let group: any = {};

    accountType.scheduleTypes.forEach(element => {
      group[element.propertyName] = new FormControl('', Validators.required);
    });

    return new FormGroup(group);
  }

  toInstalmentFormGroup(accountType: AccountType): FormGroup {
    let group: any = {};

    accountType.instalmentTypes.forEach(element => {
      group[element.propertyName] = new FormControl('', Validators.required);
    });

    return new FormGroup(group);
  }

  renderForm(accountType: AccountType) {
    this.accountType = accountType;
  }

  onDetailsNextStep(event: any) {
    const request = this.details_form.value;
    // this.apiClient.getCalculatedForm(this.accountTypeService.get().className, request)
    //   .subscribe(response => {
    //     this.accountType = response.body;
    //   },
    //   errorResponse => {
    //     console.log(errorResponse);
    //   });
  }
}