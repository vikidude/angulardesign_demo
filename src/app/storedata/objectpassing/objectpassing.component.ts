import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-objectpassing',
  templateUrl: './objectpassing.component.html',
  styleUrls: ['./objectpassing.component.css']
})
export class ObjectpassingComponent implements OnInit {

  public data1: string = "ViKi";
  public summary1: string = "Summary1";
   data: Data[] = [];
  constructor() { 
    this.data = [];
    this.data.push(new Data('Viki', 'Summary1'));
    this.data.push(new Data('Monish', 'Summary2'));
    this.data.push(new Data('Arun', 'Summary3'));
    // let a1 = new Data('viki', 'summary');
    // let a2 = new Data('monish', 'summary1');
    // this.data.push(a1);
    // this.data.push(a2);
    // console.log(this.data);
    
  }

  ngOnInit() {
  }

}
