import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,SlicePipe,JsonPipe,NaPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  title = 'app works!';

  courseName = 'ANGULAR 20';
  courseDuration = 'Duration is ziada';
  currentDate = new Date();

  rollNoList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  studentObj: any = {
    name: 'John',
    age: 20,
    course: 'Angular',
    address :{
      city:'Pune',
      state:'MH'
    }
  }
}
