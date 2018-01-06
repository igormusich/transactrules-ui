import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from 'app/pages/data/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule
  ],
  declarations: [CalendarComponent],
  exports:[CalendarComponent]
})
export class CalendarModule { }
