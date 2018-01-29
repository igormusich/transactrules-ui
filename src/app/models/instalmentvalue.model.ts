
export class InstalmentValue {
  amount: number;
  hasFixedValue: boolean;

  from(value:InstalmentValue){
    this.amount = value.amount;
    this.hasFixedValue = value.hasFixedValue;
  }
}
