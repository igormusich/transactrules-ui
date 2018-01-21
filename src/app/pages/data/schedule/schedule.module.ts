import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule.component';
import { 
  MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSortModule, 
  MatTableModule, 
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule, 
  MatTooltipModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';

import { MatRadioModule } from '@angular/material/radio';
import { SelectScheduleComponent } from './select-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule, 
    MatTableModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule, 
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatStepperModule
  ],
  exports: [ScheduleComponent, SelectScheduleComponent ],
  declarations: [ScheduleComponent, SelectScheduleComponent],
  entryComponents: [ScheduleComponent, SelectScheduleComponent]
})
export class ScheduleModule { }
