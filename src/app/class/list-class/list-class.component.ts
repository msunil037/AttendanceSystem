import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { TeacherService } from 'src/app/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent {
  constructor(private _classService: ClassService, private _router:Router, private _teacherService:TeacherService){}
  classes : any[] = [];
  teachers: any[] = [];
  isTeacher = false;
  routeToAddClass(){
    this._router.navigateByUrl("class/add-class");
  }
  getTecherNameByEmail(email:string){
    let teacher:any = this.teachers.filter(teacher => teacher.email === email);
    if(teacher.length){
      return teacher[0].name;
    }else {
      return "";
    }
  }
  deleteClass(id:string){
    this._classService.deleteClass(id).subscribe((classRes: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: classRes.message
      }).then(_ => {
        this.getClassesList();
      })
    })
  }
  routeToAttendance(id:string){
    this._router.navigateByUrl('class/attendance/' + id);
  }
  routeToEditClass(id:string){
    this._router.navigateByUrl('class/edit-class/' + id);
  }
  ngOnInit(){
    if(localStorage.getItem('role') === 'teacher'){
      this.isTeacher = true;
    }else {
      this.isTeacher = false;
    }
    this.getClassesList();
  }
  getClassesList(){
    this._classService.getClasses().subscribe((classesRes: any) => {
      this.classes = classesRes.classes;
      this._teacherService.getTeacher().subscribe((teacherRes:any) => {
        this.teachers = teacherRes.teachers;
        this.classes.forEach(item => {
          item.teacherName = this.getTecherNameByEmail(item.teacher);
        })
      })
    })
  }
}
