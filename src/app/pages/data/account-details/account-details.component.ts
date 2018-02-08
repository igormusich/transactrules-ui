import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiClientService } from 'app/api-client-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Account, Transaction, InstalmentValue, InstalmentSet } from 'app/models';
import { MatTableDataSource , MatPaginator} from "@angular/material";
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http/src/response';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'vr-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  animations: [...ROUTE_TRANSITION]
})
export class AccountDetailsComponent implements OnInit {

  accountNumber: string;
  account: Account;
  form: FormGroup;

  transactionDataSource: MatTableDataSource<Transaction> | null;
  instalmentDataSource: MatTableDataSource<InstalmentValue> | null;

  transactions: Observable<HttpResponse<Transaction[]>>;

  transactionDisplayedColumns = ['image', 'actionDate', 'valueDate', 'transactionType', 'amount', 'balance', 'actions'];
  instalmentDisplayedColumns = ['date', 'amount', 'hasFixedValue', 'actions'];

  @ViewChild(MatPaginator) transactionPaginator: MatPaginator;
  @ViewChild('instalmentPaginator') instalmentPaginator: MatPaginator;

  constructor(private route: ActivatedRoute,
    public apiClient: ApiClientService,
    private fb: FormBuilder) {

    this.transactionDataSource = new MatTableDataSource<Transaction>([]);
    this.transactionDataSource.paginator = this.transactionPaginator;
    this.instalmentDataSource = new MatTableDataSource<InstalmentValue>([]);
    this.instalmentDataSource.paginator = this.instalmentPaginator;

    this.route.params.subscribe(
      params => {
        this.accountNumber = params['accountNumber'];
        this.apiClient.findAccountByAccountNumber(this.accountNumber).subscribe(result => {
          this.account = result.body;
          this.instalmentDataSource.data = this.getInstalmentSetValues(this.account);
          this.instalmentDataSource.paginator = this.instalmentPaginator;
          this.instalmentDataSource.filter= "";

          this.form.setValue(
            {
              accountNumber: this.account.accountNumber,
              accountTypeName: this.account.accountTypeName,
              active: this.account.active,
              dateActivated: this.account.dateActivated
            }
          );
        });
      });
  }

  getInstalmentSetValues(account: Account): InstalmentValue[] {
    var keys = Object.keys(account.instalmentSets);

    var set: InstalmentSet = account.instalmentSets[keys[0]].instalments;

    var dates: any[] = Object.keys(set);

    var instalments = new Array<InstalmentValue>();

    dates.forEach((date: string) => {
      var value: InstalmentValue = set[date];
      var instalmentValue = new InstalmentValue();
      instalmentValue.from(value, date);

      instalments.push(instalmentValue);
    });

    return instalments;
  }

  createForm() {

  }

  createTransaction() {

  }

  reverseTransaction(transaction: Transaction) {

  }

  ngOnInit() {

    this.form = this.fb.group({
      accountNumber: new FormControl({ value: '', disabled: true }), // <--- the FormControl called "name"
      active: new FormControl({ value: '', disabled: true }),
      dateActivated: new FormControl({ value: '', disabled: true }),
      accountTypeName: new FormControl({ value: '', disabled: true })
    });

    this.transactions = this.apiClient.getTransactions(this.accountNumber, "2018-02-01", "2018-02-28", "Principal")
    this.transactions.subscribe(response => {
      this.transactionDataSource.data = response.body;
      this.transactionDataSource.paginator = this.transactionPaginator;
      this.transactionDataSource.filter = "";
    })
  }

}
