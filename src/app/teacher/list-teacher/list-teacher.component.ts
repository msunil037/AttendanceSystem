import { Component } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent {
  teachers = [
    {
      "name": "Sanjay",
      "email": "teacher@email.com",
      "phone": "9876543210"
    },
    {
      "name": "Sanjay",
      "email": "teacher@email.com",
      "phone": "9876543210"
    },
    {
      "name": "Sanjay",
      "email": "teacher@email.com",
      "phone": "9876543210"
    },
    {
      "name": "Sanjay",
      "email": "teacher@email.com",
      "phone": "9876543210"
    }
  ]
}
