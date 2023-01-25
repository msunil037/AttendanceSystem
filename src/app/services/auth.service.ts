import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  login(userDetails:any){
    return this._http.post('http://localhost:3000/api/user/login', userDetails)
  }
  signup(userDetails:any){
    return this._http.post('http://localhost:3000/api/user/signup', userDetails)
  }
}
