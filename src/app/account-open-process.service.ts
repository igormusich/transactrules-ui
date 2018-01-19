import { Injectable } from '@angular/core';
import { Process } from 'app/models/process.model';

@Injectable()
export class AccountOpenProcessService {

  constructor() { }

  private accountOpenProcess:Process;

  set(process:Process){
      this.accountOpenProcess = process;
  }

  get():Process{
      return this.accountOpenProcess;
  }

}
