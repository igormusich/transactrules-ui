import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollbarModule } from '../../../core/scrollbar/scrollbar.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from 'app/pages/data/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [CalendarComponent],
  exports:[CalendarComponent]
})
export class CalendarModule { }
