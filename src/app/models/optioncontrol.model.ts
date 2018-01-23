import { OptionValue } from './optionvalue.model';

export interface OptionControl {
  isRequired: boolean;
  labelName: string;
  order: number;
  propertyName: string;
  value: OptionValue;
}
