import { Component, OnInit, Input } from '@angular/core';
import { Info } from 'src/app/model/info';
import { StudentService } from '../studentinfo/student.service';
import { Address } from 'src/app/model/address';
import { UpdateinfoService } from './updateinfo.service';
//import the file uploader plugin
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NotifierService } from 'angular-notifier';
//define the constant url we would be uploading to.
const URL = 'http://localhost:3002/';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent implements OnInit {
  private readonly notifier: NotifierService;
   //declare a property called fileuploader and assign it to an instance of a new fileUploader.
    //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
    public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  public address : Address;
  public info :Info;
  @Input('id') childMessage: string;
  
  constructor(private service: StudentService, private Update: UpdateinfoService, private dialog: MatDialog, private dialogRef : MatDialogRef<UpdateinfoComponent>, private  notifierService: NotifierService) { 
    this.notifier = notifierService;
  }

  ngOnInit() {
    console.log(this.service.id);
   this.info = new Info();
   this.address = new Address();

    this.service.getByStudentId(this.service.id).subscribe(( data: Info) => {
      
      this.info = data;
      console.log(this.info);
    }, (error) => {
        console.log(error);
    })

     //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
     this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
     //overide the onCompleteItem property of the uploader so we are 
     //able to deal with the server response.
     this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          console.log("ImageUpload:uploaded:", item, status, response);
      };
 
  }
 
  update() {
    console.log(this.info);
    this.Update.updateInfo(this.info).subscribe( (res) => {
      console.log(res);
      this.notifier.notify( 'success', 'Your details updated successfully!' );
      this.closeModal();
    }, (error)=> {
      console.log(error);
    });
    
  }
  closeModal() {
    //this.notifier.notify( 'warning', 'Modal closed successfully!' );
    this.dialogRef.close();
  }

}
