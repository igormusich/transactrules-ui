import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../../app.animation';
import { AccountCreateService } from '../../../../account-create.service'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'app/api-client-service';
import { Router } from '@angular/router';
import { InstalmentSet, Account, AccountType } from 'app/models';
import { InstalmentValue } from 'app/models/instalmentvalue.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'vr-edit-account-instalments',
  templateUrl: './edit-account-instalments.component.html',
  styleUrls: ['./edit-account-instalments.component.scss']
})
export class EditAccountInstalmentsComponent implements OnInit {

  accountType: AccountType;
  account: Account;
  dataSource: MatTableDataSource<InstalmentValue> | null;
  displayedColumns = ['date','amount','hasFixedValue','actions'];

  constructor(public accountCreateService: AccountCreateService,
    private fb: FormBuilder,
    public apiClient: ApiClientService,
    public router: Router) { }

  ngOnInit() {
    this.accountType = this.accountCreateService.getAccountType();
    this.account = this.accountCreateService.getAccount();
    this.dataSource = new MatTableDataSource<InstalmentValue>(this.getInstalmentSetValues(this.account));
  }

  getInstalmentSetValues(account:Account):InstalmentValue[] {
    var keys = Object.keys(account.instalmentSets);

    var set:InstalmentSet  = account.instalmentSets[keys[0]].instalments;

    var dates: any[] = Object.keys(set);

    var instalments = new Array<InstalmentValue>();

    dates.forEach((date: string) => {
      var value:InstalmentValue = set[date];
      var instalmentValue = new InstalmentValue();
      instalmentValue.from(value, date);
      
      instalments.push(instalmentValue);
    });

    return instalments;
  }

  create(){
    //show dialog to create new instalment value
  }

  update(instalmentValue:InstalmentValue ){
    
  }

  delete(instalmentValue:InstalmentValue ){
    
  }

  onPreviousStep(){
    this.router.navigate(['/data/create-account/schedules']);  
  }

  onNextStep(){
    //save and close
  }


}
