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
