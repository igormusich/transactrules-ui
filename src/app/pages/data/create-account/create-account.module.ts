import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSortModule, 
  MatTableModule, 
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule, 
  MatTooltipModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';

import {MatRadioModule} from '@angular/material/radio';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollbarModule } from '../../../core/scrollbar/scrollbar.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { ListModule } from '../../../core/list/list.module';
import { CreateAccountRoutingModule} from 'app/pages/data/create-account/create-account-routing.module'

import { CreateAccountComponent } from './create-account.component';
import { ScheduleModule } from 'app/pages/data/schedule/schedule.module';
//import { ScheduleComponent } from 'app/pages/data/schedule/schedule.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    ListModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSortModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSnackBarModule, 
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule, 
    MatProgressSpinnerModule,
    MatTabsModule,
    MatStepperModule,
    CreateAccountRoutingModule,
    ScheduleModule
  ],
  declarations: [CreateAccountComponent],
  exports: [CreateAccountComponent],
  entryComponents: []
})
export class CreateAccountModule { }
