import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ScheduleComponent } from 'app/pages/data/schedule/schedule.component';
import { Schedule } from 'app/models';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { shimContentAttribute } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'vr-select-schedule',
  templateUrl: './select-schedule.component.html',
  styleUrls: ['./select-schedule.component.scss']
})
export class SelectScheduleComponent implements OnInit {

  @Input() schedule:Schedule;
  @Input() placeholder:String;

  constructor(public composeDialog: MatDialog) { }

  ngOnInit() {
  }

  editSchedule(){
    const dialogRef = this.composeDialog.open(ScheduleComponent,{
      height: '600px',
      width: '800px',
    });


    dialogRef.componentInstance.initFromSchedule(this.schedule);

  }

}
