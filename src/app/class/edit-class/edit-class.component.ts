import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent {
  constructor(
    private _studentService: StudentService,
    private _teacherService: TeacherService,
    private _classService: ClassService,
    private _route: ActivatedRoute
  ) {}
  @ViewChild('updateClassForm') form!: NgForm
  teachersOption: any[] = [];
  studentsOption: any[] = [];
  studentOptionLocal:any[] = [];
  classID:any;
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

    this._route.paramMap.subscribe(pramMap => {
      this.classID = pramMap.get('classId');
      this._classService.getClasseById(this.classID).subscribe((classRes:any) => {
        console.log('classRes', classRes);
        
        this.form.setValue({
          className: classRes.className,
          branch: classRes.branch,
          sem: classRes.sem,
          teacher: classRes.teacher,
          students: classRes.students,
        })
      })
    })

    
  }
  clear(form:NgForm){
    form.reset();
  }
  updateClass(form:NgForm){
    let classInfo = {...form.value};
    classInfo['id'] = this.classID;
    this._classService.updateClass(this.classID, classInfo).subscribe((classRes:any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: classRes.message
      })
    })
  }

}
