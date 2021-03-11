/*import { Component, OnInit } from '@angular/core';

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
}*/
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public _model: any = {};  
  public _source: Array<any>;  
  
  constructor(private _service: StudentService) {  
      this._source = this._service.returnStudentData();  
  }  
  
  ngOnInit(): void {  
  }  
  
  public submit(): void {  
      if (this.validate()) {  
          this._service.addStudentData(this._model);  
         
      }  
  }  
  
  public reset(): void {  
    
      this._model = {};  
    
  }  
 
  
  public validate(): boolean {  
      let status: boolean = true;  
      if (typeof (this._model.name) === "undefined") {  
          alert('Name is Blank');  
          status = false;  
          return;  
      }  
      else if (typeof (this._model.age) === "undefined") {  
          alert('Age is Blank');  
          status = false;  
          return;  
      }  
      else if (typeof (this._model.city) === "undefined") {  
          alert('City is Blank');  
          status = false;  
          return;  
      }  
      else if (typeof (this._model.dob) === "undefined") {  
          alert('dob is Blank');  
          status = false;  
          return;  
      }  
      return status;  
  }  
}  

