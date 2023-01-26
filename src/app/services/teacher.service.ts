import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http: HttpClient) { }


  saveTeacher(teacherDetails:any){
    return this._http.post(environment.baseURL + 'teacher', teacherDetails);
  }

  getTeacher(){
    return this._http.get(environment.baseURL + 'teacher');
  }

  updateTeacher(id:string, teacherInfo:any){
    return this._http.put(environment.baseURL + 'teacher/' + id, teacherInfo);
  }

  getTeacherById(id:string){
    return this._http.get(environment.baseURL + 'teacher/' + id);
  }

  deleteTeacher(id:any){
    return this._http.delete(environment.baseURL + 'teacher/' + id);
  }
}
