import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  filesToUpload: Array<File> = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    // for(let i =0; i < files.length; i++){
    //     formData.append("uploads[]", files[i], files[i]['name']);
    // }
    // console.log('form data variable :   '+ formData.toString());
    // this.http.post('http://localhost:3002/upload', formData)
    //     .pipe(map((files) => files.json()))
    //     .subscribe(files => console.log('files', files));
    //     console.log(files);
        
}

fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}

}
