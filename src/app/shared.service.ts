import { DataTable } from './module/datatable';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const apiUrl = "https://run.mocky.io/v3/caa977cb-05fe-4b80-8a9b-b808e4d7475e"

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor(private http: HttpClient) { }
  getProducts():Observable<DataTable[]>{
    return this.http.get<DataTable[]>(apiUrl);
    
  }
 
}