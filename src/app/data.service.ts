import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[] = ["John Matthew", "E34", "kklo@.com"]
  info2: string[] = ["Jacob Hilary", "E35", "khgugo@.com"]
  info3: string[] = ["Samira Milroy", "E36", "rururlo@.com"]
  //method to retun above data
  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  addInfo(info){
    this.info1.push(info)
    return this.info1
  }
  addInfo2(info){
    this.info2.push(info)
    return this.info2
  }
  addInfo3(info){
    this.info3.push(info)
    return this.info2
  }
  constructor() { }
}
