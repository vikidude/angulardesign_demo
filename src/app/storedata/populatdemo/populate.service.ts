import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopulateService {
baseURL: string = 'http://localhost:3001/api'
  constructor(private http: HttpClient) { }

  postData(data) {
    return this.http.post(this.baseURL+'/postUser', data);
  }
  getData() {
    return this.http.get(this.baseURL+'/getAllUser');
  }
}
