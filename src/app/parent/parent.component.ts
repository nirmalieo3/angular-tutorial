import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   euro = 0;
   testoGrazie = ' ';
  constructor() { }

  ngOnInit(): void {
  }
  inviaChild(){
    this.euro++;
    console.log(this.euro)
  }
  ringraziaParent(event){
    this.testoGrazie = event;
  }
}
