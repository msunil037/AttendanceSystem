import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  constructor(private _studentService: StudentService, private _route: ActivatedRoute){}
  @ViewChild('editStudentForm') form!: NgForm;
  clear(form:NgForm){
    form.reset()
  }
  studentID:any;
  ngOnInit(){
    this._route.paramMap.subscribe(paramMap => {
      this.studentID = paramMap.get('id');
      this._studentService.getStudentById(this.studentID).subscribe((studentRes: any) => {
        this.form.setValue({
          name : studentRes.name,
          roll : studentRes.roll,
          branch : studentRes.branch,
          sem : studentRes.sem,
          email : studentRes.email,
          phone : studentRes.phone,
        })
    })

    })
  }
  updateStudent(form: NgForm){
    console.log(form.valid);
    let studentDetails = {...form.value};
    studentDetails['id'] = this.studentID;
    this._studentService.updateStudent(this.studentID, studentDetails).subscribe((studentRes: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: studentRes.message
      })
    })
  }
}
