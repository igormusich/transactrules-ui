import { InstalmentElement } from './instalmentelement.model';

export interface InstalmentSet {
  dataSetId: number;
  dataSetName: string;
  dependsOnDataSets: number[];
  isValid: boolean;
  url: string;
  data: InstalmentElement[];
}
