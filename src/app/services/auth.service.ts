import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  login(userDetails:any){
    return this._http.post(environment.baseURL + 'user/login', userDetails)
  }
  signup(userDetails:any){
    return this._http.post(environment.baseURL + 'user/signup', userDetails)
  }
}
