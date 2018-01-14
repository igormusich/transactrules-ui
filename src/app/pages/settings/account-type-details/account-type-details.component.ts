import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { PositionType } from 'app/models/positiontype.model';
import { AmountType } from 'app/models/amounttype.model';
import { DataSource } from '@angular/cdk/collections';
import { AccountType } from 'app/models/accounttype.model';
import { PositionTypeDetailsComponent } from 'app/pages/settings/account-type-details/position-type-details/position-type-details.component';
import { ApiClientService } from 'app/api-client-service';
import { SelectedAccountTypeService } from 'app/selected-account-type.service';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { retry } from 'rxjs/operator/retry';


@Component({
  selector: 'vr-account-type-details',
  templateUrl: './account-type-details.component.html',
  styleUrls: ['./account-type-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class AccountTypeDetailsComponent implements OnInit {

  displayedColumns = ['image','labelName','propertyName','actions'];

  positionDataSource: PositionTypesSource;
  amountDataSource: AmountTypesSource;

  accountType: AccountType;

  form: FormGroup;

  constructor(
    public composeDialog: MatDialog,
    private snackBar: MatSnackBar,
    private apiService: ApiClientService,
    private selectedAccountTypeService: SelectedAccountTypeService,
    private fb: FormBuilder) { 
      this.createForm();

  }

  createForm(){
    this.form = this.fb.group({
      className: new FormControl ({ value:'', disabled:true }), // <--- the FormControl called "name"
      labelName: new FormControl ({ value:'', disabled:true })
    });
  }

  ngOnInit() {
    this.accountType = this.selectedAccountTypeService.get();
    this.form.setValue({
      className: this.accountType.className,
      labelName: this.accountType.labelName
    });
    this.positionDataSource = new PositionTypesSource(this.accountType.positionTypes);
    this.amountDataSource = new AmountTypesSource(this.accountType.amountTypes);
  }

  ngOnDestroy() {

  }

  createPositionType() {
    const dialogRef = this.composeDialog.open(PositionTypeDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result, null, {
          duration: 3000
        });
      }
    });
  }

  createAccountType() {
    /*const dialogRef = this.composeDialog.open(PositionTypeDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result, null, {
          duration: 3000
        });
      }
    });*/
  }

}

export class PositionTypesSource extends DataSource<PositionType> {
  items: Observable<PositionType[]>;
  constructor(private positionTypes:PositionType[]) {
    super();
    this.items = Observable.of(positionTypes);
  }
  connect(): Observable<PositionType[]> {
    return this.items;
  }
  disconnect() { }

  isLoadingResults() {
    return false;
  }
}

export class AmountTypesSource extends DataSource<AmountType> {
  items: Observable<AmountType[]>;
  constructor(private positionTypes:AmountType[]) {
    super();
    this.items = Observable.of(positionTypes);
  }
  connect(): Observable<AmountType[]> {
    return this.items;
  }
  disconnect() { }

  isLoadingResults() {
    return false;
  }
}