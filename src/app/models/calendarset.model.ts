import { CalendarElement } from './calendarelement.model';

export interface CalendarSet {
  dataSetId: number;
  dataSetName: string;
  dependsOnDataSets: number[];
  isValid: boolean;
  url: string;
  data: CalendarElement;
}
