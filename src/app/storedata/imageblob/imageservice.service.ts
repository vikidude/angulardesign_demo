import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  thumbnailFetchUrl : string = "https://south/generateThumbnail?width=100&height=100&smartCropp";
  constructor(private httpClient: HttpClient) { }

  getBlobThumbnail(): Observable<Blob> {  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.post<Blob>(this.thumbnailFetchUrl,
      {
        "url": "http://acs/container/Logo.png"
      }, {headers: headers, responseType: 'blob' as 'json' });
  }
}
