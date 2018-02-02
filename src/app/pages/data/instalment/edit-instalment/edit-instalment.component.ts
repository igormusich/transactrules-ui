import { Component, OnInit } from '@angular/core';
import { InstalmentValue } from 'app/models/instalmentvalue.model';

@Component({
  selector: 'vr-edit-instalment',
  templateUrl: './edit-instalment.component.html',
  styleUrls: ['./edit-instalment.component.scss']
})
export class EditInstalmentComponent implements OnInit {

  public instalmentValue: InstalmentValue;

  constructor() { }

  ngOnInit() {
  }

}
