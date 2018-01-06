import { ScheduleDate } from './scheduledate.model';

export interface Schedule {
  businessDayCalculation: string;
  endDate: string;
  endType: string;
  frequency: string;
  interval: number;
  numberOfRepeats: number;
  startDate: string;
  excludeDates: ScheduleDate[];
  includeDates: ScheduleDate[];
}
