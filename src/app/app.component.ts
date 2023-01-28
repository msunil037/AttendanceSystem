import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _router: Router){

  }
  logout(){
    this._router.navigateByUrl("/");
    localStorage.clear();
  }
  menu:any[] = [
    {
      name:'student',
      title: 'Student',
      subMenu: [
        {
          name: 'listStudent',
          title: "List Student",
          url : 'student'
        },
        {
          name: 'addStudent',
          title: "Add Student",
          url : 'student/add-student'
        }
      ]
    },
    {
      name:'teacher',
      title: 'Teacher',
      subMenu: [
        {
          name: 'listTeacher',
          title: "List Teacher",
          url : 'teacher'
        },
        {
          name: 'addTeacher',
          title: "Add Teacher",
          url : 'teacher/add-teacher'
        }
      ]
    },
    {
      name:'class',
      title: 'Class',
      role: 'teacher',
      subMenu: [
        {
          name: 'listClass',
          title: "List Class",
          url : 'class'
        },
        {
          name: 'addClass',
          title: "Add Class",
          url : 'class/add-class'
        }
      ]
    },
    {
      name:'report',
      title: 'Report',
      role: 'teacher',
      subMenu: [
        {
          name: 'showAttendance',
          title: "Show Attendance",
          url : 'report'
        }
      ]
    }
  ]

  getRoleValidationStatus(menuItem:any){
    if(localStorage.getItem('role') === 'admin'){
      return true;
    }
    return localStorage.getItem('role') === menuItem.role;
  }
  currentURL: string = "";
  ngOnInit(){
    this._router.events.subscribe(res => {
      if(res instanceof NavigationEnd){
        this.currentURL = res.url;
      }
    })
  }
  title = 'AttendanceSystem';
}
