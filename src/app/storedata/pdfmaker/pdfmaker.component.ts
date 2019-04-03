import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf'
import { StudentService } from '../studentinfo/student.service';
import { Info } from 'src/app/model/info';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pdfmaker',
  templateUrl: './pdfmaker.component.html',
  styleUrls: ['./pdfmaker.component.css']
})
export class PdfmakerComponent implements OnInit {
  public baseURL: string= 'http://192.168.1.6:3005/pdfmake/pdf';
  @ViewChild('colorProp') colprop:ElementRef;
  public info: Info[];
  displayedColumns: string[] = ['Student_Name', 'Register_Number', 'Mobile_Number'];
  dataSource;

  // color1 = '#d49d9d';
  color2 = '#753434';
  // color3 = '#f5ea0a';
  // customPalette = {
  //     id: 'custom1',
  //     name: 'Custom palette',
  //     colors: [
  //       '#EBF5FA', '#B4E1FA', '#007ACE', '#084E8A', '#001429'
  //     ]
  //   };

  colorChange(color: string) {
    this.color2 = color;
    console.log("Selected color code: "+this.color2);
//console.log(this.colprop.nativeElement.value);
this.colprop.nativeElement.color = "red";
    
  }
  constructor(private studentService: StudentService,private http : HttpClient) { }

  ngOnInit() {
   
    //this.getStudentInfo();

  }

  getStudentInfo(){
    this.studentService.getStudent().subscribe( (data: Info[]) =>{
     
      this.info = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(this.info);
    }, (error) => {
      console.log(error);
    })
  }

  generatePdf() {
    // var doc = new jsPDF()

    // doc.text('Hello world!', 10, 10)
    // doc.save('a4.pdf')

    // Landscape export, 2×4 inches
    var doc = new jsPDF({
    orientation: 'potrait',
    unit: 'cm',
    format: 'a4' //[]
})

// doc.text(this.info[0].mobile_number, 10, 10)
// doc.text(this.info[0].register_number, 10, 10)
doc.text(this.info[0].student_name, 1, 1)
doc.save('two-by-four.pdf')
  }

  pdfMaker() {
    var info ;
    this.http.post(`${this.baseURL}`, info, {responseType: 'arraybuffer'}).subscribe( (data)=> {
      var file = new Blob([data], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
       console.log("response: ", data);
    }, (error)=> {
      console.log(error);
    });
  }

}