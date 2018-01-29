import { Component, OnInit } from '@angular/core';
import { AccountCreateService } from '../../../../account-create.service'
import { ApiClientService } from 'app/api-client-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountType } from 'app/models/accounttype.model';
import { Schedule } from 'app/models/schedule.model';
import { ScheduleControl } from 'app/pages/data/schedule/schedule-control';
import { Account } from 'app/models/account.model';

@Component({
  selector: 'vr-edit-account-schedules',
  templateUrl: './edit-account-schedules.component.html',
  styleUrls: ['./edit-account-schedules.component.scss']
})
export class EditAccountSchedulesComponent implements OnInit {

  accountType: AccountType;
  account: Account;
  schedules:Array<ScheduleControl>;

  constructor(public accountCreateService: AccountCreateService,
    private fb: FormBuilder,
    public apiClient: ApiClientService,
    public router: Router ) { }

  ngOnInit() {
    this.accountType = this.accountCreateService.getAccountType();
    this.account = this.accountCreateService.getAccount();
    this.schedules = this.createScheduleControls(this.accountType, this.account);
  }

  createScheduleControls(accountType:AccountType, account:Account):Array<ScheduleControl>{
    var controls = new Array<ScheduleControl>();
    
    accountType.scheduleTypes.forEach(scheduleType=>{
      var schedule:Schedule = account.schedules[scheduleType.propertyName];
      var control = new ScheduleControl();
      control.scheduleType = scheduleType;
      control.schedule = schedule;

      controls.push(control);
    });

    return controls;
  }

  onPreviousStep(){
    this.router.navigate(['/data/create-account']);  
  }

  onNextStep(){
    this.router.navigate(['/data/create-account/instalments']);  
  }

}
