import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http: HttpClient) { }

  baseURL = "http://localhost:3000/api/"

  saveTeacher(teacherDetails:any){
    return this._http.post(this.baseURL + 'teacher', teacherDetails);
  }

  getTeacher(){
    return this._http.get(this.baseURL + 'teacher');
  }

  deleteTeacher(id:any){
    return this._http.delete(this.baseURL + 'teacher/' + id);
  }
}
