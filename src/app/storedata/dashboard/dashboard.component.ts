import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
import {  KeyboardShortcutsService }     from 'ng-keyboard-shortcuts';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [KeyboardShortcutsService]
})
export class DashboardComponent implements OnInit {

   theme  = 'light-theme';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('firstNameInput') input:ElementRef;
  // renderedData: any;
text: string = '';
  constructor( private overlayContainer : OverlayContainer, private keyboard: KeyboardShortcutsService, private element: ElementRef) {
    // this.dataSource.connect().subscribe(d => this.renderedData = d);

    const target = this.element.nativeElement.querySelector(".demo-input");

   
           this.keyboard.add([
                {
                    key: 'ctrl f',
                    command: () =>  console.log('ctrl+f'),
                    
                },
                {
                    key: 'shift f',
                    command: () => this.input.nativeElement.focus(),
                    target: target
                },
                {
                    key: 'enter',
                    command: () =>console.log("enter")
                     ,
                    preventDefault: true
                }
            ]);
 
 
            this.keyboard.add({
                  key: ['cmd + shift + g', 'cmd + g'],
                  command: ({event, key}) => console.log(key, event)
            })
   } //end of constructor

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
  update(e) {
    console.log("update calls()", e.target.value);
    this.theme = e.target.value;
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
       overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);
  }

  onEnterPress(event) {
    //var key = window.event.keyCode;
    //console.log("Hai welcome enter key pressed: "+event.keyCode);
    var enterKey = event.keyCode;
    if (enterKey == 13) {
      this.text=this.text+',';
    }
  }
  
 
}
