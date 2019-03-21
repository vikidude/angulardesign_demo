import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Info } from 'src/app/model/info';

@Injectable({
  providedIn: 'root'
})
export class UpdateinfoService {
public baseURL: any = 'http://localhost:3002/api/studentinfo';
  constructor(private http : HttpClient) { }

  updateInfo(info: Info) {
    return this.http.put(this.baseURL + '/' + info._id, info).subscribe(res => console.log('Data updated', res));
  }
  
  
}

