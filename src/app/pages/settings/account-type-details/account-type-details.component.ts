import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { PositionType } from 'app/models/positiontype.model';
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

  dataSource: PositionTypesSource;

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
      className: new FormControl ('defaultClassName', Validators.required ), // <--- the FormControl called "name"
      labelName: new FormControl ('defaultLabelName', Validators.required )
    });
  }

  ngOnInit() {
    this.accountType = this.selectedAccountTypeService.get();
    this.form.setValue({
      className: this.accountType.className,
      labelName: this.accountType.labelName
    });

    this.dataSource = new PositionTypesSource(this.accountType.positionTypes);
  }

  ngOnDestroy() {

  }

  openComposeDialog() {
    const dialogRef = this.composeDialog.open(PositionTypeDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result, null, {
          duration: 3000
        });
      }
    });
  }

}

export class PositionTypesSource extends DataSource<any> {
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