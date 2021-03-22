import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input() euroCount;
   @Output() grazie: EventEmitter<string> = new EventEmitter<string>();
   
  constructor() { }

  ngOnInit(): void {
  }
  ringraziaParent($event){
    this.grazie.emit('Grazie');
  }
}
