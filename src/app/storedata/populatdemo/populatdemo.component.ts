import { Component, OnInit } from '@angular/core';
import { PopulateService } from './populate.service';

@Component({
  selector: 'app-populatdemo',
  templateUrl: './populatdemo.component.html',
  styleUrls: ['./populatdemo.component.css']
})
export class PopulatdemoComponent implements OnInit {
  displayedColumns: string[] = ['username', 'address', 'email', 'mobilenumber', 'createdBy', 'createdOn', 'modifiedBy', 'modifiedOn', 'status', 'totalincome', 'pf', 'esi', 'incentive', 'insurance'];
  dataSource:any;

  public data:any =  { "username" :"", "address":"","email":"","mobilenumber":"", "createdBy":"","modifiedBy":"","status":"",
   "credits":{
      "totalincome":"",
      "pf":"",
      "esi":"",
      "incentive":"",
      "insurance":""
   }
  };
  alldata: any;
  hasError:boolean=false;
  constructor(private populate: PopulateService) { }

  ngOnInit() {
    this.getData();
  }
  save() {
    console.log(this.data);
    this.populate.postData(this.data).subscribe((data) => {
      console.log(data);
    },(err)=>{
      console.log(err);
      
    })
  }
  getData() {
    this.populate.getData().subscribe( (data)=> {
      this.alldata=data;
      console.log(this.alldata);
      this.dataSource=this.alldata;
      console.log(this.alldata[0].credits[0].esi);
      
    }, (error) => {
      console.log(error);
      
    })
  }
  showhide() {
    if(this.hasError == false) {
      this.hasError =true;
    } else {
      this.hasError =false;
    }
    
  }



}
