import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Info } from 'src/app/model/info';
import { StudentService } from '../studentinfo/student.service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateinfoService {
public baseURL: any = 'http://localhost:3002/api/studentinfo';

private _refreshNeeded$ = new Subject<void>();

    get refreshNeeded$() {
      return this._refreshNeeded$;
    }


  constructor(private http : HttpClient, private student: StudentService) { }

  updateInfo(info: Info) {
    return this.http.put<Info>(this.baseURL + '/' + info._id, info).pipe(tap(()=>{
      this._refreshNeeded$.next();
    }));
        
  }
  
}

