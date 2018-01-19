import { InstalmentSet } from './instalmentset.model';

export interface InstalmentElement {
  isRequired: boolean;
  labelName: string;
  order: number;
  propertyName: string;
  value: InstalmentSet;
}
