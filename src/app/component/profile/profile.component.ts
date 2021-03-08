import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  testo:string = "";
  testo2:string = "";
  testo3:string = "";
  testo4:string = "";
  dataArr:any = [];
  constructor() { }

  ngOnInit(): void {
  }

save(){
  this.dataArr.push({name:this.testo, surname:this.testo2, email:this.testo3, codicefiscale:this.testo4})
  console.log(this.dataArr)
}

 test():boolean {
   if(this.testo.length < 4 || this.testo2.length < 4 || this.testo3.length < 4  || this.testo4.length < 4 ){
     return true;
   }else{
     return false;
   }
 }
}
