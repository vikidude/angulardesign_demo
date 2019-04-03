import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from 'src/app/model/info';
import { callbackify } from 'util';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http : HttpClient) { }

public baseURL: string= 'http://192.168.1.6:3002/api/studentinfo';

id: string;
// get student list
private _refreshNeeded$ = new Subject<void>();

    get refreshNeeded$() {
      return this._refreshNeeded$;
    }


  getStudent() {
  return this.http.get(this.baseURL);
  }
  // post
  postStudent(info: Info) {
    return this.http.post(`${this.baseURL}`, info)
  }
  // update
  updateStudent(info: Info) {
    return this.http.put<Info>(this.baseURL + '/' +  info._id, info).pipe (tap( ()=>{
      this._refreshNeeded$.next();
      } 
    ));
  }
  // delete
  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + '/' + _id);
  }
  // get by id
  getByStudentId(id: string) {
    return this.http.get(this.baseURL + '/' + id);
  }
  populateInfo(id) {
    this.id = id;
  }
}
