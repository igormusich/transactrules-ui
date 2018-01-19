import { OptionElement } from './optionelement.model';

export interface OptionSet {
  dataSetId: number;
  dataSetName: string;
  dependsOnDataSets: number[];
  isValid: boolean;
  url: string;
  data: OptionElement[];
}
