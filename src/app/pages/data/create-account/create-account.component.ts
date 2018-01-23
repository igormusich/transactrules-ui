import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { AccountForm } from 'app/models';
import { AccountFormService } from '../../../account-form.service'
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';


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

  accountForm: AccountForm;

  constructor(
    public accountOpen: AccountFormService,
    private fb: FormBuilder,
    public composeDialog: MatDialog) { 

    }

  ngOnInit() {
    this.accountForm = this.accountOpen.get();
    this.details_form = this.toDetailsFormGroup(this.accountForm);
    this.schedule_form = this.toScheduleFormGroup(this.accountForm);
    this.instalment_form = this.toInstalmentFormGroup(this.accountForm);
  }



  toDetailsFormGroup(accountForm: AccountForm ): FormGroup {
    let group: any = {};

    accountForm.dates.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    accountForm.amounts.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    accountForm.rates.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    accountForm.options.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    if(accountForm.calendar != null){
      group[accountForm.calendar.propertyName] = new FormControl(accountForm.calendar.value, Validators.required);
    }

    return new FormGroup(group);
  }

  toScheduleFormGroup(accountForm: AccountForm ): FormGroup {
    let group: any = {};

    accountForm.schedules.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    return new FormGroup(group);
  }

  toInstalmentFormGroup(accountForm: AccountForm ): FormGroup {
    let group: any = {};

    accountForm.instalments.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    return new FormGroup(group);
  }

  renderForm(accountForm: AccountForm){
    this.accountForm = accountForm;
  }

  previousPage() {
    this.selectedIndex -= 1;
  }

  nextPage() {
    this.selectedIndex += 1;
  }
}