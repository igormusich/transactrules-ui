import { Component, OnInit, Input, OnChanges, DoCheck, 
  AfterContentChecked, AfterContentInit , AfterViewChecked , AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Schedule } from 'app/models';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'app/api-client-service';
import { ControlValueAccessor } from '@angular/forms';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'vr-select-schedule',
  templateUrl: './select-schedule.component.html',
  styleUrls: ['./select-schedule.component.scss']
})
export class SelectScheduleComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy, ControlValueAccessor {
  

  @Input() schedule:Schedule;
  @Input() placeholder:String;

  form: FormGroup;

  // Function to call when the schedule changes.
  onChange = (schedule: Schedule) => {};

  // Function to call when the input is touched 
  onTouched = () => {};

  constructor(private apiService: ApiClientService,
    private fb: FormBuilder) { }

    writeValue(obj: Schedule): void {
      this.schedule = obj;
      console.log(`ngOnInit  - schedule is ${this.schedule}`);
    }
  
     // Save the function as a property to call later here.
     registerOnChange(fn: (schedule: Schedule) => void): void {
      this.onChange = fn;
      console.log("registerOnChange");
    }
  
    // Allows Angular to register a function to call when the input has been touched.
    // Save the function as a property to call later here.
    registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
      console.log("registerOnTouched");
    }
  
    setDisabledState?(isDisabled: boolean): void {
      console.log("setDisabledState");
    }
  
    ngDoCheck() {
      //console.log("ngDoCheck")
    }
  
    ngAfterContentInit() {
      //console.log("ngAfterContentInit");
    }
  
    ngAfterContentChecked() {
      //console.log("ngAfterContentChecked");
    }
  
    ngAfterViewInit() {
      //console.log("ngAfterViewInit");
    }
  
    ngAfterViewChecked() {
      //console.log("ngAfterViewChecked");
    }
  
    ngOnDestroy() {
      console.log("ngOnDestroy");
    }


  ngOnInit() {
    this.form = this.fb.group({
      startDate: new FormControl (this.schedule.startDate , Validators.required ), 
      endType: new FormControl (this.schedule.endType , Validators.required ),
      endDate: new FormControl (this.schedule.endDate), 
      frequency: new FormControl (this.schedule.frequency, Validators.required ), 
      interval: new FormControl (this.schedule.interval , Validators.required ), 
      numberOfRepeats: new FormControl (this.schedule.numberOfRepeats)
    });

    console.log(`ngOnInit  - schedule is ${this.schedule}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.schedule}`);

    for (let key in changes) {
      console.log(`${key} changed. 
        Current: ${changes[key].currentValue}. 
        Previous: ${changes[key].previousValue}`);
    }

    if(this.form != null){
      this.form.setValue(this.schedule);
    }
  }

}
