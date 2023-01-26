import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent {
  constructor(private _router: Router, private _teacherService:TeacherService){}
  teachers:any[] = [];
  routeAddTeacher(){
    this._router.navigateByUrl('teacher/add-teacher')
  }
  ngOnInit(){
    this._teacherService.getTeacher().subscribe((res:any) => {
      this.teachers = res.teachers;
    })
  }

  edit(id:string){
    this._router.navigateByUrl("teacher/edit-teacher/" + id)
  }

  delete(id:any){
    this._teacherService.deleteTeacher(id).subscribe((res:any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.message
      }).then(_ => {
        this._teacherService.getTeacher().subscribe((res:any) => {
          this.teachers = res.teachers;
        })
      })
    })
  }
}
