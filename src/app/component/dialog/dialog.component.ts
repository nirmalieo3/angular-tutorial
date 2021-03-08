import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  myArr = [
    {
      header: 'Angular App',
      content: 'I like to develop web pages using angular app. Angular material is very useful tool.'
    }
  ]
   constructor() { }
 
   ngOnInit(): void {
   }
 
 }
 
  

