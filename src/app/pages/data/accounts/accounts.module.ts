import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSortModule, 
  MatSelectModule,
  MatTableModule, 
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDatepickerModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollbarModule } from '../../../core/scrollbar/scrollbar.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { ListModule } from '../../../core/list/list.module';


import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from 'app/pages/data/accounts/accounts.component';
import { SelectAccountTypeComponent } from './select-account-type/select-account-type.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    ListModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AccountsRoutingModule
  ],
  declarations: [AccountsComponent,SelectAccountTypeComponent],
  exports: [AccountsComponent],
  entryComponents: [SelectAccountTypeComponent]
})
export class AccountsModule { }
