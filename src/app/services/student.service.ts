import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) {}


  saveStudent(teacherDetails: any) {
    return this._http.post(environment.baseURL + 'student', teacherDetails);
  }

  getStudent() {
    return this._http.get(environment.baseURL + 'student');
  }

  updateStudent(id: string, teacherInfo: any) {
    return this._http.put(environment.baseURL + 'student/' + id, teacherInfo);
  }

  getStudentById(id: string) {
    return this._http.get(environment.baseURL + 'student/' + id);
  }

  deleteStudent(id: any) {
    return this._http.delete(environment.baseURL + 'student/' + id);
  }
}
