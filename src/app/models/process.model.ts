import { AmountElement } from './amountelement.model';
import { CalendarElement } from './calendarelement.model';
import { DateElement } from './dateelement.model';
import { InstalmentElement } from './instalmentelement.model';
import { OptionElement } from './optionelement.model';
import { RateElement } from './rateelement.model';
import { ScheduleElement } from './scheduleelement.model';

export interface Process {
  accountNumber: string;
  amounts: AmountElement[];
  calendar: CalendarElement;
  dates: DateElement[];
  instalments: InstalmentElement[];
  options: OptionElement[];
  rates: RateElement[];
  schedules: ScheduleElement[];
}
