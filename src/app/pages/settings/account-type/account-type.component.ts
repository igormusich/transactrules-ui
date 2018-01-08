import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSort } from '@angular/material';
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
import { AccountType } from 'app/models/accounttype.model';
import { ApiClientService } from 'app/apiService';

@Component({
  selector: 'vr-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class AccountTypeComponent implements OnInit {

  scrollbar: any;

  displayedColumns = ['name'];
  dataSource: AccountTypeSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _apiService: ApiClientService) {

  }

  ngOnInit() {
    this.dataSource = new AccountTypeSource(this._apiService);

  }

  ngOnDestroy() {
  }

  createAccountType(){
    
  }
}

export class AccountTypeSource extends DataSource<any> {
  items: Observable<AccountType[]>;
  constructor(private apiService: ApiClientService) {
    super();
  }
  connect(): Observable<AccountType[]> {
    this.items = this.apiService.findAllAccountTypes();

    return this.items;
  }
  disconnect() { }

  isLoadingResults() {
    return false;
  }
}



