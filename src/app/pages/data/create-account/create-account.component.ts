import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { Process } from 'app/models/process.model';
import { AccountOpenProcessService } from '../../../account-open-process.service'


@Component({
  selector: 'vr-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class CreateAccountComponent implements OnInit {

  selectedIndex = 0;
  lastIndex = 3;

  process: Process;

  constructor(
    public accountOpen: AccountOpenProcessService
    ) { 

    }

  ngOnInit() {
    this.process = this.accountOpen.get();
  }

  renderProcess(process: Process){
    this.process = process;

  }

  previousPage() {
    this.selectedIndex -= 1;
  }

  nextPage() {
    this.selectedIndex += 1;
  }
}