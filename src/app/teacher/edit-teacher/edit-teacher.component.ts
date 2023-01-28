import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent {
  constructor(private _route: ActivatedRoute, private _teacherService: TeacherService){}
  teacherId:any;
  teacherInfo:any;
  @ViewChild('updateTeacherForm') form!: NgForm;
  ngOnInit(){
    this._route.paramMap.subscribe(paramMap => {
      console.log("id", paramMap.get('id'));
      this.teacherId = paramMap.get('id');
      this._teacherService.getTeacherById(this.teacherId).subscribe(teacher => {
        this.teacherInfo = {...teacher};

        this.form.setValue({
          name : this.teacherInfo.name,
          email : this.teacherInfo.email,
          phone : this.teacherInfo.phone
        })
      })
    })
  }
  clear(form: NgForm){
    form.reset();
  }
  updateTeacher(form:NgForm){
    let teacherInfo = {...form.value};
    teacherInfo.id = this.teacherId;
    this._teacherService.updateTeacher(this.teacherId, teacherInfo).subscribe((res: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.message
      })
    })
  }
}
