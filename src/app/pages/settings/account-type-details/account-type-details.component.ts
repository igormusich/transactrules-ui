import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'vr-account-type-details',
  templateUrl: './account-type-details.component.html',
  styleUrls: ['./account-type-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class AccountTypeDetailsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

}
