import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from 'app/pages/data/accounts/accounts.component';

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  declarations: [AccountsComponent],
  exports: [AccountsComponent]
})
export class AccountsModule { }
