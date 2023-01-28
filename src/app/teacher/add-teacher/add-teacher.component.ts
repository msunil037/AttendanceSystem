import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {
  constructor(private _teacherService: TeacherService, private _authService:AuthService){}
  clear(form: NgForm){
    form.reset();
  }
  saveTeacher(form:NgForm){
    if(form.invalid){
      return
    }
    this._teacherService.saveTeacher(form.value).subscribe((res:any) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.message
      }).then(_ => {
        this._authService.signup({
          email: form.value.email,
          password: 'Teacher@1234',
          role: 'teacher'
        }).subscribe(res => {
          form.resetForm();
        })
      })
    })
  }
}
