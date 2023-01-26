import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  constructor(private _studentService: StudentService){}
  students: any[] = []

  ngOnInit(){
    this._studentService.getStudent().subscribe((res: any) => {
      this.students = res.students;
    })
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
