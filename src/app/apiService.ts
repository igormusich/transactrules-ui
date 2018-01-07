import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {
  Account,
  AccountType,
  AmountType,
  AmountValue,
  DateType,
  DateValue,
  InstalmentSet,
  InstalmentType,
  InstalmentValue,
  OptionType,
  OptionValue,
  Position,
  PositionType,
  RateType,
  RateValue,
  Schedule,
  ScheduleDate,
  ScheduleType,
  ScheduledTransaction,
  Transaction,
  TransactionRuleType,
  TransactionType
} from './models';

/**
* Created with angular4-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {

  private domain = 'http://localhost:4200/api';

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string ) {
    if (domain) {
      this.domain = domain;
    }
  }

  /**
  * Method findAllAccountTypes
  * @return Full HTTP response as Observable
  */
  public findAllAccountTypes(): Observable<AccountType[]> {
    let uri = `/accountTypes`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    //return this.sendRequest<AccountType[]>('get', uri, headers, params, null);
    return this.http.get<AccountType[]>(this.domain +  uri);
  }

  /*getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }*/

  /**
  * Method createAccountType
  * @param item item
  * @return Full HTTP response as Observable
  */
  public createAccountType(item: AccountType): Observable<HttpResponse<AccountType>> {
    let uri = `/accountTypes`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<AccountType>('post', uri, headers, params, JSON.stringify(item));
  }

  /**
  * Method findAllAccounts
  * @return Full HTTP response as Observable
  */
  public findAllAccounts(): Observable<Account[]> {
    let uri = `/accounts`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    //return this.sendRequest<Account[]>('get', uri, headers, params, null);
    return this.http.get<Account[]>(this.domain +  uri);
  }

  /**
  * Method createAccount
  * @param account account
  * @return Full HTTP response as Observable
  */
  public createAccount(account: Account): Observable<HttpResponse<any>> {
    let uri = `/accounts`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(account));
  }

  /**
  * Method findAccountByAccountNumber
  * @param id id
  * @return Full HTTP response as Observable
  */
  public findAccountByAccountNumber(id: string): Observable<HttpResponse<AccountType[]>> {
    let uri = `/accounts/${id}`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<AccountType[]>('get', uri, headers, params, null);
  }

  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, { headers: headers, params: params, observe: 'response' });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
