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
  MatIconModule,
  MatMenuModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollbarModule } from '../../../core/scrollbar/scrollbar.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { ListModule } from '../../../core/list/list.module';


import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from 'app/pages/data/accounts/accounts.component';

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
    MatProgressSpinnerModule,
    AccountsRoutingModule
  ],
  declarations: [AccountsComponent],
  exports: [AccountsComponent]
})
export class AccountsModule { }
