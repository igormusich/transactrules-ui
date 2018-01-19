import { Schedule } from './schedule.model';

export interface ScheduleElement {
  isRequired: boolean;
  labelName: string;
  order: number;
  propertyName: string;
  value: Schedule;
}
