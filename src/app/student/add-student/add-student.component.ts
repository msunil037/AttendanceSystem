import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private _studentService: StudentService){}
  clear(form:NgForm){
    form.reset()
  }
  saveStudent(form:NgForm){
    form.form.markAllAsTouched();
    this._studentService.saveStudent(form.value).subscribe((res: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.message
      }).then(_ => {
          form.resetForm();
      })
    })
  }
}
