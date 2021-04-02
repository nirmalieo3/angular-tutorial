import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-crud-requests',
  templateUrl: './crud-requests.component.html',
  styleUrls: ['./crud-requests.component.css']
})


export class CrudRequestsComponent implements OnInit {
  nome2: string;
  nome: string;
  personeList:any;
  constructor(public sharedService : SharedService, public ngxService : NgxUiLoaderService) { }

  ngOnInit(): void {
    this.getDati();
  }
   getDati(){
     this.ngxService.start();
     this.sharedService.getPeople().subscribe(data=>{
      this.ngxService.stop(); 
      console.log(data, 'Dati');
      this.personeList = data;
     })
   };
   postDati(){
     this.sharedService.postPeople({ "name": this.nome
     }).subscribe(data=>{
      
       this.nome = null;
       console.log(data, 'Dati2');
       this.getDati();
     })
   };
   deleteDati(){
    /*this.ngxService.stop(); */
     this.sharedService.deletePeople().subscribe(data=>{
       console.log(data);
       this.sharedService.userId = null;
       this.getDati();
     })
   }
   updateDati(){
    this.ngxService.start(); 
     this.sharedService.putPeople({"name":this.nome2}).subscribe(data=>{
       this.nome2 = null;
       this.sharedService.userId = null;
       console.log(data, 'Dati3');
       this.getDati();
     })
     }
}

