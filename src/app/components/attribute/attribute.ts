import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css'
})
export class Attribute {
studentList = [
      { name: 'John Doe', age: 20, isActive: true },
      { name: 'Jane Smith', age: 22, isActive: false },
      { name: 'Alice Johnson', age: 19, isActive: true },
      { name: 'Bob Brown', age: 21, isActive: false }
    ]

    themeColor = "bg-success"

  textColor = "red"

  myCss: any = {
    'background-color': 'lightblue',
    'font-size': '20px',
    'color': 'darkblue'
  }
}
