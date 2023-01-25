import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _authService: AuthService, private router: Router){

  }

  submit(form:NgForm){
    if(form.invalid){
      return
    }
    console.log(form.value);
    this._authService.login(form.value).subscribe((res:any) => {
      console.log('login success', res);
      localStorage.setItem('role', res.role);
      if(res.role === 'admin'){
        this.router.navigateByUrl("/teacher")
      }else {
        this.router.navigateByUrl("/class/add-class")
      }
    })
  }

}
