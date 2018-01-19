import { RateElement } from './rateelement.model';

export interface RateSet {
  dataSetId: number;
  dataSetName: string;
  dependsOnDataSets: number[];
  isValid: boolean;
  url: string;
  data: RateElement[];
}
