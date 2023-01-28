import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
})
export class AddClassComponent {
  constructor(
    private _studentService: StudentService,
    private _teacherService: TeacherService,
    private _classService: ClassService
  ) {}
  teachersOption: any[] = [];
  studentsOption: any[] = [];
  studentOptionLocal:any[] = [];
  onChange(event: any) {
    console.log(
      this.studentsOption.filter(
        (student) => student.branch === event.target.value
      )
    );
    this.studentOptionLocal = this.studentsOption.filter(
      (student) => student.branch === event.target.value
    );
  }
  ngOnInit() {
    this._teacherService.getTeacher().subscribe((teacherRes: any) => {
      this.teachersOption = teacherRes.teachers;
    });

    this._studentService.getStudent().subscribe((studentRes: any) => {
      console.log(studentRes);
      this.studentsOption = studentRes.students;
      this.studentOptionLocal = [...this.studentsOption];
    });
  }
  clear(form:NgForm){
    form.reset();
  }
  saveClass(form: NgForm) {
    console.log(JSON.stringify(form.value));
    form.form.markAllAsTouched();
    this._classService.addClass(form.value).subscribe((classRes: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: classRes.message
      }).then(_ => {
        form.reset();
      })
    })
  }
}
