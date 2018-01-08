import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatDatepickerModule, 
  MatIconModule, 
  MatInputModule, 
  MatNativeDateModule, 
  MatRadioModule, 
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule, 
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../../../core/utils/utils.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';

import { AccountTypeDetailsRoutingModule } from './account-type-details-routing.module';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { AccountTypeDetailsComponent } from 'app/pages/settings/account-type-details/account-type-details.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      BreadcrumbsModule,
      FlexLayoutModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatCheckboxModule,
      MatRadioModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatTabsModule,
      PageHeaderModule,
      AccountTypeDetailsRoutingModule
  ],
  declarations: [AccountTypeDetailsComponent],
  exports: [AccountTypeDetailsComponent]
})
export class AccountTypeDetailsModule { }
