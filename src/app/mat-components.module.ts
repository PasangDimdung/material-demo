import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatInputModule, MatDatepickerModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  exports : [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule
  ]
} )
export class MatComponentsModule { }
