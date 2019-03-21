import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from 'src/app/model/info';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http : HttpClient) { }

public baseURL: string= 'http://localhost:3002/api/studentinfo';


// get student list
  getStudent() {
  return this.http.get(this.baseURL);
  }
  // post
  postStudent(info: Info) {
    return this.http.post(`${this.baseURL}`, info).subscribe(res => console.log('Data added', res));
  }
  // update
  updateStudent(info: Info) {
    return this.http.put(this.baseURL + '/' +  info._id, info);
  }
  // delete
  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + '/' + _id);
  }
  // get by id
  getByStudentId(id: string) {
    return this.http.get(this.baseURL + '/' + id);
  }
}
