import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  userForm: FormGroup = new FormGroup({
    // Define form controls here
    userId: new FormControl(0),
    emailId: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNumber: new FormControl(''),
  });

  http = inject(HttpClient);
  userList$: Observable<any>;

  constructor(){
    this.userList$ = this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers'); 
  }

  onSaveUser() {
    debugger
    const formValue = this.userForm.value;
    console.log(this.userForm.value);
    // You can add further logic to handle form submission, e.g., sending data to a server

    // Create User and subscribe ma new method ha ye next and error wala
    this.http.post('https://jsonplaceholder.typicode.com/posts', formValue).subscribe({
      next: (response: any) => {
        alert('User created successfully')
      },
      error: (error) => {
        alert(error)
      }
    });
  }

  onEdit(data: any) {
    
this.userForm = new FormGroup({
    // Define form controls here
    userId: new FormControl(data.userId),
    emailId: new FormControl(data.emailId),
    password: new FormControl(data.password),
    fullName: new FormControl(data.fullName),
    mobileNumber: new FormControl(data.mobileNumber),
  });
  }

  onReset() {
    this.userForm.reset()
  }
}
