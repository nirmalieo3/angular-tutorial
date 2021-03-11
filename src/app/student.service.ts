import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _studentList: Array<any> = [];  
  
    constructor() {  
        this._studentList = [{name:'Silvano', age:21, city:'Rome', dob:'01-01-2000'}];  
    }  
  
    returnStudentData(): Array<any> {  
        return this._studentList;  
    }  
  
    addStudentData(item: any): void {  
        this._studentList.push(item);  
    }  
    getHeroes(){
      return [
        {
          "superhero":"Loki",
          "actor":"Tom Hiddleston",
         
          },
        {
          "superhero":"Thor", 
          "actor":"Thor Odinson",
          },
      {
        "superhero":"Captain America", 
        "actor":"Steve Rogers",
        },
      {
        "superhero":"Flash", 
        "actor":"Jay Garrick",
        }
      ]
    }
}  