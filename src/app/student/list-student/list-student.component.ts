import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  constructor(private _studentService: StudentService, private _router: Router){}
  students: any[] = []
  routeToAddStudent(){
    this._router.navigateByUrl("student/add-student");
  }
  ngOnInit(){
    this._studentService.getStudent().subscribe((res: any) => {
      this.students = res.students;
    })
  }

  routeToStudent(id:string){
    this._router.navigateByUrl("student/edit-student/" + id);
  }

  deleteStudent(id:string){
    this._studentService.deleteStudent(id).subscribe((res:any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.message
      }).then(_ => {
        this._studentService.getStudent().subscribe((res:any) => {
          this.students = res.teachers;
        })
      })
    })
  }

}
