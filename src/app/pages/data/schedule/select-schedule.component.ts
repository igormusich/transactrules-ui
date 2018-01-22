import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Schedule } from 'app/models';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'app/api-client-service';

@Component({
  selector: 'vr-select-schedule',
  templateUrl: './select-schedule.component.html',
  styleUrls: ['./select-schedule.component.scss']
})
export class SelectScheduleComponent implements OnInit {

  @Input() schedule:Schedule;
  @Input() placeholder:String;

  startDate: Date;
  endType:String;
  endDate:Date;

  form: FormGroup;

  constructor(private apiService: ApiClientService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      startDate: new FormControl (new Date(), Validators.required ), 
      endType: new FormControl ('END_DATE', Validators.required ),
      endDate: new FormControl (new Date(), Validators.required ), 
      frequency: new FormControl ('MONTHLY', Validators.required ), 
      interval: new FormControl (1, Validators.required ), 
      numberOfRepeats: new FormControl (12, Validators.required )
    });
  }

  initFromSchedule(schedule: Schedule){
    this.startDate = new Date(schedule.startDate);
    this.endType = schedule.endType;
  }


}
