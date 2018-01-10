import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { PositionType } from 'app/models/positiontype.model';
import { DataSource } from '@angular/cdk/collections';
import { AccountType } from 'app/models/accounttype.model';
import { PositionTypeDetailsComponent } from 'app/pages/settings/account-type-details/position-type-details/position-type-details.component';

@Component({
  selector: 'vr-account-type-details',
  templateUrl: './account-type-details.component.html',
  styleUrls: ['./account-type-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class AccountTypeDetailsComponent implements OnInit {

  sub: Subscription;
  className:String;
  accountType: AccountType;

  dataSource: PositionTypesSource;
  constructor(private route: ActivatedRoute,  
    private router: Router,
    public composeDialog: MatDialog,
    private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.className = params['className'] || "";
      });

     this.accountType = new AccountType();
     this.dataSource = new PositionTypesSource(this.accountType.positionTypes);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
  }
  connect(): Observable<PositionType[]> {
    
    return Observable.of(this.positionTypes);
  }
  disconnect() { }

  isLoadingResults() {
    return false;
  }
}