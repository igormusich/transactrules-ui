import { Schedule } from './schedule.model';

export interface ScheduleControl {
  isRequired: boolean;
  labelName: string;
  order: number;
  propertyName: string;
  value: Schedule;
}
