import { Transaction } from './transaction.model';

export interface Account {
  accountNumber: string;
  accountTypeName: string;
  active: boolean;
  amounts: any;
  calendarNames: string[];
  dates: any;
  instalmentSets: any;
  options: any;
  positions: any;
  rates: any;
  schedules: any;
  transactions: Transaction[];
}
