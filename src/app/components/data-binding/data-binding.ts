import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  // string, num, boolean, date, array, object, any
  courseName: string = 'Angular 20';
  courseDuration: number = 30; // in days
  isCourseActive: boolean = false;
  courseStartDate: Date = new Date(); 

  minTestScore: number = 50;
 spanClass: string = 'secondary';
  constructor() {
    console.log(this.courseName);
    this.courseName = 'Angular 20 Data Binding';
    console.log(this.courseName); 

    setTimeout(() => {
      this.courseDuration = 45; // Update course duration after 7 seconds
    }, 7000);
  }

  showAlert() {
    alert('Button clicked!');
  }
  
  onOptionChange(){
    alert('Option changed!');
  }
}
