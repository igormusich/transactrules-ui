import { Component, OnInit } from '@angular/core';
import { Schedule } from 'app/models/schedule.model';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'app/api-client-service';

@Component({
  selector: 'vr-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  startDate: Date;
  endType:String;
  endDate:Date;

  form: FormGroup;
  constructor(private dialogRef: MatDialogRef<ScheduleComponent>,
    private apiService: ApiClientService,
    private fb: FormBuilder){ }

  ngOnInit() {
    this.form = this.fb.group({
      startDate: new FormControl (new Date(), Validators.required ), 
      endType: new FormControl ('END_DATE', Validators.required )
    });
  }

  initFromSchedule(schedule: Schedule){
    this.startDate = new Date(schedule.startDate);
    this.endType = schedule.endType;
  }

}
