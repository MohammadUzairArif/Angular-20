
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
   selectedCast: string = '';
   isStudentActive = signal(false);
   
    castList: string[] = [
      'Tom Cruise',
      'Brad Pitt',
      'Leonardo DiCaprio',
      'Johnny Depp',
      'Robert Downey Jr.',
      'Chris Hemsworth'
    ];

    studentList = [
      { name: 'John Doe', age: 20, isActive: true },
      { name: 'Jane Smith', age: 22, isActive: false },
      { name: 'Alice Johnson', age: 19, isActive: true },
      { name: 'Bob Brown', age: 21, isActive: false }
    ]
   changeStatus(value: boolean) {
     this.isStudentActive.set(value);
   }
}
