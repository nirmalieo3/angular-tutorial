import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {
  sessionNome : string;
  getNomeSession:string;
  getCognomeLocal:string;
  constructor(public service : SharedService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      console.log(data, 'Dati');
      this.sessionNome = data[0].name;  
   
    })
  }
   sessionStorageSetItem(){
     sessionStorage.setItem(this.sessionNome, 'Name')
   }
   sessionStorageGetItem(){
    this.getNomeSession = sessionStorage.getItem('Name')
     console.log(this.getNomeSession,'nome delle session')
  }
  localStorageSetItem(){
      localStorage.setItem('cognome', 'Golban');
  }
   localStorageGetItem(){
    this.getCognomeLocal= localStorage.getItem('Cognome')
     console.log(this.getCognomeLocal,'Cognome delle session')
  }
}

