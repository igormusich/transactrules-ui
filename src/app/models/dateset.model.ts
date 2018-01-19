import { DateElement } from './dateelement.model';

export interface DateSet {
  dataSetId: number;
  dataSetName: string;
  dependsOnDataSets: number[];
  isValid: boolean;
  url: string;
  data: DateElement[];
}
