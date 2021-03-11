import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getinfo',
  templateUrl: './getinfo.component.html',
  styleUrls: ['./getinfo.component.css'],
  providers: [DataService]
})
export class GetinfoComponent implements OnInit {
  infoRecieved1:string[]=[];
  infoRecieved2:string[]=[];
  infoRecieved3:string[]=[];
  //get informatn from service.data
  //use the property to receive data
   getinfoService1(){
       this.infoRecieved1 = this.dservice.getInfo1()
   }
   getinfoService2(){
    this.infoRecieved2 = this.dservice.getInfo2()
  }
  getinfoService3(){
    this.infoRecieved3 = this.dservice.getInfo3()
  }
  //create a property(dservice)
  constructor(private dservice:DataService) { }

  ngOnInit(): void {
  }
  updateInfo(frm:any){
   this.dservice.addInfo(frm.value.location)
  }
  updateInfo2(frm2:any){
    this.dservice.addInfo2(frm2.value.location)
   }
   updateInfo3(frm3:any){
    this.dservice.addInfo3(frm3.value.location)
   }
}
