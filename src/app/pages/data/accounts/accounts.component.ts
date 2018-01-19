import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';


import { ApiClientService } from 'app/api-client-service';
import { Account } from 'app/models/account.model';

import { SelectAccountTypeComponent } from './select-account-type/select-account-type.component';
import { AccountOpenProcessService } from '../../../account-open-process.service';
import { Router } from '@angular/router';


@Component({
  selector: 'vr-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class AccountsComponent implements OnInit {

  scrollbar: any;

  displayedColumns = ['accountTypeName','accountNumber'];
  dataSource: AccountSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiClientService, 
    public composeDialog: MatDialog,
    public accountOpen: AccountOpenProcessService,
    public router: Router ) {

  }

  ngOnInit() {
    this.dataSource = new AccountSource(this.apiService);

  }

  ngOnDestroy() {
  }

  createAccount(){
    const dialogRef = this.composeDialog.open(SelectAccountTypeComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.accountOpen.set(result.object);
        this.router.navigate(['/data/create-account']);      
      }
    }); 
  }
}

export class AccountSource extends DataSource<any> {
  items: Observable<Account[]>;
  constructor(private apiService: ApiClientService) {
    super();
  }
  connect(): Observable<Account[]> {
    this.items = this.apiService.findAllAccounts();

    return this.items;
  }
  disconnect() { }

  isLoadingResults() {
    return false;
  }
}
