import { AmountElement } from './amountelement.model';

export interface AmountSet {
  dataSetId: number;
  dataSetName: string;
  dependsOnDataSets: number[];
  isValid: boolean;
  url: string;
  data: AmountElement[];
}
