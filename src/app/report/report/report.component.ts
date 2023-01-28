import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  constructor(private _classService: ClassService) {}
  classes: any[] = [];
  attendanceToShow:any[] = [];
  search(form: NgForm) {
    console.log(form.value);
    console.log(moment(form.value.date).format('DD-MM-YYYY'));
    this._classService
      .getAttendanceReportByDate (form.value.class, moment(form.value.date).format('DD-MM-YYYY'))
      .subscribe((reportRes: any) => {
        this.attendanceToShow = [...reportRes];
      });
  }
  ngOnInit() {
    this._classService.getClasses().subscribe((classRes: any) => {
      this.classes = classRes.classes;
    });
  }
}
