import { Component, OnInit, ViewChild } from '@angular/core';
import { Address} from '../../model/address';
import { Info } from 'src/app/model/info';
import { StudentService } from './student.service';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { NotifierService } from 'angular-notifier';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UpdateinfoComponent } from '../updateinfo/updateinfo.component';
import { callbackify } from 'util';
import { UpdateinfoService } from '../updateinfo/updateinfo.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})

export class StudentinfoComponent implements OnInit {
  private readonly notifier: NotifierService;
  // declaration
  formData;
  public address : Address;
  public info :Info;
  info1 : Info[];
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  displayedColumns: string[] = ['Student_Name', 'Register_Number', 'Mobile_Number'];
  displayedColumns1: string[] = ['Student_Name', 'Register_Number', 'Mobile_Number','action'];

  dataSource;
  
  update: boolean = false;
  id: string = '';
  constructor(private stu_service: StudentService, private http: HttpClient,  notifierService: NotifierService, private dialog: MatDialog, private Update: UpdateinfoService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.formData = new FormGroup({
      emailid: new FormControl("viki@gmail.com"),
      password: new FormControl("monish")
    });
   // this.stu_service.getStudent().subscribe( Response => console.log(Response));
   // this.http.get("http://192.168.1.6:3000/api/studentinfo").
   // subscribe(res => console.log(res));
// definiton
    this.info = new Info();
    //this.info.address = new Address();
    this.Update.refreshNeeded$.subscribe(()=>{
      this.getStudent();
    });
    this.getStudent();
  }
  
  getStudent() {
    this.stu_service.getStudent()
    .subscribe((data: Info[]) => {
      this.info1 = data;
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.info1);

    },(error)=>{
      console.log(error);

    });
  }

  onClickSubmit(data) {
    console.log(data);
    alert(data.emailid);
  }

   submit() {
    
    if ((this.info.student_name) != null) {
    //console.log(this.info);
    this.stu_service.postStudent(this.info).
        subscribe(res => 
            {
              console.log('Data added', res)
              this.getStudent(); 
              this.info = new Info();
            }
            ,(error) => {
              console.log(error);
            });
    this.notifier.notify( 'success', 'Your details added successfully!' );
    //alert("Your details updated successfully!. Have a nice day!");
    
      

    } else {
      this.notifier.notify('warning', 'Check your details');
    }
      
      
   
  }
  change(id: string){
    this.stu_service.populateInfo(id);
    // this.update=true;
    // this.id = id;
    // this.info.Student_Name = Student_Name;
    // this.info.Register_Number = Register_Number;
    // this.info.Mobile_Number = Mobile_Number;

    console.log(id);
  }

  // modal
  onClickButton(row) {
    this.change(row._id);
    //console.log(row._id)
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = "60%";
      this.dialog.open(UpdateinfoComponent, matDialogConfig);
  }

}
