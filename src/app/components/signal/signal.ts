import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
  // simple variable

  courseName: string = 'Angular Fundamentals';

  // signal variable
  angularVersion = signal("20")

  courseDuration = signal<string>("3 months");

  // signal variable with array
  cityList = signal<string[]>(["New York", "Los Angeles", "Chicago"]);

  //object signal variable
  studentDetails = signal<any>({
    name: "John Doe",
    city: "New York",
  })


  changeDuration() {
    // simpple variable chnage
    this.courseName = "Angular Advanced";

    // update signal variable using set method whixh replacee the old value
    this.courseDuration.set("6 months");
  }
  cityAdd() {
    // update signal variable using update method which adds a new value to the array
    this.cityList.update((oldValue) => [...oldValue, "San Francisco"]);
  }

  changeStudentDetails() {
    // update signal variable using update method which replaces the old object with a new one
    this.studentDetails.update((oldValue) => ({
      ...oldValue,
      name: "Jane Smith",
      city: "Los Angeles"
    }));
  }
}
