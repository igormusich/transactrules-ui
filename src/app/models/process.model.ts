import { AmountSet } from './amountset.model';
import { CalendarSet } from './calendarset.model';
import { DateSet } from './dateset.model';
import { InstalmentSet } from './instalmentset.model';
import { OptionSet } from './optionset.model';
import { RateSet } from './rateset.model';
import { ScheduleSet } from './scheduleset.model';

export interface Process {
  processId: string;
  status: string;
  amountSet: AmountSet;
  calendarSet: CalendarSet;
  dateSet: DateSet;
  instalmentSet: InstalmentSet;
  optionSet: OptionSet;
  rateSet: RateSet;
  scheduleSet: ScheduleSet;
}
