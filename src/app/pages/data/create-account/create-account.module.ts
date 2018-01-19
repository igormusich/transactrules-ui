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
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatTabsModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollbarModule } from '../../../core/scrollbar/scrollbar.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { ListModule } from '../../../core/list/list.module';
import { CreateAccountRoutingModule} from 'app/pages/data/create-account/create-account-routing.module'

import { CreateAccountComponent } from './create-account.component';

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
    CreateAccountRoutingModule
  ],
  declarations: [CreateAccountComponent],
  exports: [CreateAccountComponent],
  entryComponents: []
})
export class CreateAccountModule { }
