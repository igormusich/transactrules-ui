import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountTypeRoutingModule } from './account-type-routing.module';
import { AccountTypeComponent } from 'app/pages/settings/account-type/account-type.component';

@NgModule({
  imports: [
    CommonModule,
    AccountTypeRoutingModule
  ],
  declarations: [AccountTypeComponent],
  exports: [
    AccountTypeComponent
  ]
})
export class AccountTypeModule { }
