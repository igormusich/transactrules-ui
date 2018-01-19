import { OptionValue } from './optionvalue.model';

export interface OptionElement {
  isRequired: boolean;
  labelName: string;
  order: number;
  propertyName: string;
  value: OptionValue;
}
