import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  id: number;
  name: string;
  type: string;
  usage: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Angular', type: 'framework',  usage:'front-end'},
  {id: 2, name: 'React', type: 'Js Library',  usage:'front-end'},
  {id: 3, name: 'Webpack', type: 'framework',  usage:'front-end'},
  {id: 4, name: 'JQuery', type:  'js Library',  usage:'front-end'},
  {id: 5, name: 'Bootstrap', type: 'framework',  usage:'front-end'},
  {id: 6, name: 'CSS', type: 'style-sheet',  usage:'front-end'},
  {id: 7, name: 'Javascript', type: 'language',  usage:'front-end'},
  {id: 8, name: 'Html', type: 'Mark up',  usage:'front-end'},
  {id: 9, name: 'Git', type: 'tool',  usage:'front-end'},
  {id: 10, name: 'Node Js', type: 'platform',  usage:'back-end'},
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
  }
  alertFun(){
    alert('I like React!!');
  }
  displayedColumns: string[] = ['id', 'name', 'type', 'usage'];
  dataSource = ELEMENT_DATA;
  showFiller = false;
}


