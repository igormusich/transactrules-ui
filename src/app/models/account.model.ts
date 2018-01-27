
import { 
  Transaction,
  AmountValue, 
  DateValue, 
  InstalmentSet, 
  OptionValue, 
  Position, 
  RateValue, 
  Schedule } from 'app/models';


export interface Account {
  accountNumber: string;
  accountTypeName: string;
  active: boolean;
  amounts: Map<string,AmountValue>;
  calendarNames: string[];
  dates: Map<string,DateValue>;
  instalmentSets: Map<string,InstalmentSet>;
  options: Map<string, OptionValue>;
  positions: Map<string,Position>;
  rates: Map<string,RateValue>;
  schedules: Map<string,Schedule>;
  transactions: Transaction[];
}
