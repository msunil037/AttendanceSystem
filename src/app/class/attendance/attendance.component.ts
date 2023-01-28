import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ClassService } from 'src/app/services/class.service';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  constructor(
    private _classService: ClassService,
    private _studentService: StudentService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  classID: any;
  students: any[] = [];
  studentsByClass: any[] = [];
  classDetails: any;
  currentStudent: any;
  attendanceSheet: any[] = [];
  studentIndex = 0;
  takeAttendance(attendanceStatus: string) {
    this.currentStudent.attendanceStatus = attendanceStatus;
    this.attendanceSheet.push({ ...this.currentStudent });
    if (this.studentIndex < this.studentsByClass.length) {
      this.studentIndex++;
      this.currentStudent = this.studentsByClass[this.studentIndex];
    }
  }
  getStudentByEmail(email: string) {
    let student: any = this.students.filter(
      (student) => student.email === email
    );
    if (student.length) {
      return student[0];
    } else {
      return {};
    }
  }
  submitAttendance(){
    let attendanceSheetObj = {
      attendanceSheet: this.attendanceSheet,
      className: this.classDetails.className,
      date: moment(new Date()).format('DD-MM-YYYY')
    }
    this._classService.takeAttendance(attendanceSheetObj).subscribe((attendanceRes:any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: attendanceRes.message
      }).then(_ => {
        this._router.navigateByUrl('class')
      })
    })

    
    console.log(attendanceSheetObj);
  }
  reset(){
    this.studentIndex = 0;
    this.currentStudent = this.studentsByClass[this.studentIndex];
    this.attendanceSheet = [];
  }
  getAttendanceCount(attendanceStatus: string) {
    return this.attendanceSheet.filter(
      (attendance) => attendance.attendanceStatus === attendanceStatus
    ).length;
  }
  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      this.classID = paramMap.get('classId');
      this._classService
        .getClasseById(this.classID)
        .subscribe((classRes: any) => {
          console.log(classRes);
          this.classDetails = classRes;
          this._studentService.getStudent().subscribe((studentRes: any) => {
            this.students = studentRes.students;
            this.classDetails.students.forEach((student: any) => {
              let matchedStudent = this.getStudentByEmail(student);
              this.studentsByClass.push(matchedStudent);
              if (this.studentsByClass.length) {
                this.currentStudent = this.studentsByClass[this.studentIndex];
              }
            });
          });
        });
    });
  }
}
