import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { Process } from 'app/models/process.model';
import { AccountOpenProcessService } from '../../../account-open-process.service'
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { ScheduleComponent } from 'app/pages/data/schedule/schedule.component';


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

  process: Process;

  constructor(
    public accountOpen: AccountOpenProcessService,
    private fb: FormBuilder,
    public composeDialog: MatDialog) { 

    }

  ngOnInit() {
    this.process = this.accountOpen.get();
    this.details_form = this.toDetailsFormGroup(this.process);
    this.schedule_form = this.toScheduleFormGroup(this.process);
    this.instalment_form = this.toInstalmentFormGroup(this.process);
  }



  toDetailsFormGroup(process: Process ): FormGroup {
    let group: any = {};

    process.dates.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    process.amounts.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    process.rates.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    process.options.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    if(process.calendar != null){
      group[process.calendar.propertyName] = new FormControl(process.calendar.value, Validators.required);
    }

    return new FormGroup(group);
  }

  toScheduleFormGroup(process: Process ): FormGroup {
    let group: any = {};

    process.schedules.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    return new FormGroup(group);
  }

  toInstalmentFormGroup(process: Process ): FormGroup {
    let group: any = {};

    process.instalments.forEach(element => {
      group[element.propertyName] = element.isRequired ? new FormControl(element.value || '', Validators.required)
                                                               : new FormControl(element.value || '');
    });

    return new FormGroup(group);
  }

  editSchedule(scheduleName:String){
    var schedule = this.process.schedules.find( element => element.propertyName === scheduleName );

    const dialogRef = this.composeDialog.open(ScheduleComponent);

    dialogRef.componentInstance.initFromSchedule(schedule.value);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        schedule.value = result.data;
      }
    });

  }

  renderProcess(process: Process){
    this.process = process;
    

  }

  previousPage() {
    this.selectedIndex -= 1;
  }

  nextPage() {
    this.selectedIndex += 1;
  }
}