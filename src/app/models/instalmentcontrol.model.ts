import { InstalmentSet } from './instalmentset.model';

export interface InstalmentControl {
  isRequired: boolean;
  labelName: string;
  order: number;
  propertyName: string;
  value: InstalmentSet;
}
