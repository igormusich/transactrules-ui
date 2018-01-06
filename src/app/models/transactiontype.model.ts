import { TransactionRuleType } from './transactionruletype.model';

export interface TransactionType {
  maximumPrecision: boolean;
  name: string;
  transactionRules: TransactionRuleType[];
}
