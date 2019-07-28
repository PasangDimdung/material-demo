import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatComponentsModule } from './mat-components.module';
import { EditCourseComponent } from './edit-course/edit-course.component';




@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],

  entryComponents:[
    EditCourseComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule,
    MatDialogModule
   

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
