import { AmountControl } from './amountcontrol.model';
import { CalendarControl } from './calendarcontrol.model';
import { DateControl } from './datecontrol.model';
import { InstalmentControl } from './instalmentcontrol.model';
import { OptionControl } from './optioncontrol.model';
import { RateControl } from './ratecontrol.model';
import { ScheduleControl } from './schedulecontrol.model';

export interface AccountForm {
  amounts: AmountControl[];
  calendar: CalendarControl;
  dates: DateControl[];
  instalments: InstalmentControl[];
  options: OptionControl[];
  rates: RateControl[];
  schedules: ScheduleControl[];
}
