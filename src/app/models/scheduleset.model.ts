import { ScheduleElement } from './scheduleelement.model';

export interface ScheduleSet {
  dataSetId: number;
  dataSetName: string;
  dependsOnDataSets: number[];
  isValid: boolean;
  url: string;
  data: ScheduleElement[];
}
