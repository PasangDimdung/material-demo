import { Component, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoading = false;
  categories=[
    {name: 'Begineer'},
    {name: 'Intermediate'},
    {name: 'Advanced'}
  ];

  constructor(private dialog: MatDialog){
    this.isLoading = true;
    this.getCourse()
    .subscribe( x => 
      this.isLoading = false
      );
  }

  getCourse(){
    return timer(3000);
  }

  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1}
    })
    .afterClosed()
    .subscribe(result => console.log(result));
  }

  selectCategories(category){
    this.categories
    .filter(c => c!= category)
    .forEach(c => c['selected']= false)

    category.selected =! category.selected;
  }
}