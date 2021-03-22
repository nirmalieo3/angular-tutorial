import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms2',
  templateUrl: './reactive-forms2.component.html',
  styleUrls: ['./reactive-forms2.component.css']
})
export class ReactiveForms2Component implements OnInit {
  public dataArr: any = [];
  public childArr: any = [];
  studentForm: FormGroup;
  submitted;
    constructor() { 
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('',
       [Validators.required,
        Validators.maxLength(10), 
        Validators.pattern('')]),
      surname: new FormControl('',
      [Validators.required,
       Validators.maxLength(10)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]),
     password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(14),]),
      city: new FormControl('',
       [Validators.required,
        Validators.minLength(4),]), 
      address: new FormControl(),
       phoneNumber: new FormControl(),
       proficiency: new FormControl()
     
    })
  }
  onSubmit() {
    this.submitted = true;
    if(!this.studentForm.valid) {
      alert('Please fill all the required fields')
      return false;
    
    }else{this.dataArr.push(this.studentForm.value);
      
    console.log('student', this.dataArr);
    this.childArr = this.dataArr;
    }
    }
  loadData(){
    this.studentForm.setValue({
    name:'Giada',
    surname: 'Grilli',
    email: 'giada@yahoo.com',
    password: 45677,
    city: 'Rome',
    address: 'via tiburtina 23',
    phoneNumber: 5463737,
     proficiency: 'intermediate'
    })  
   }
   resetData(){
     this.studentForm.reset()
   }
 
}
