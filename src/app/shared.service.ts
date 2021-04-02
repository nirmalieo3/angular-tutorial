import { DataTable } from './module/datatable';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const apiUrl = "https://run.mocky.io/v3/caa977cb-05fe-4b80-8a9b-b808e4d7475e"
const urlMockServer = " http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userId : number;
  userId2: number;
  constructor(private http: HttpClient) { }
  getProducts():Observable<DataTable[]>{
    return this.http.get<DataTable[]>(apiUrl);
  }
  getPeople():Observable<any>{
    return this.http.get(urlMockServer + '/people');
  }
  postPeople(oggetto):Observable<any>{
    const headers = 
    new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(urlMockServer + '/people', oggetto , {headers})
  }

  putPeople(oggetto):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(urlMockServer + '/people/' + this.userId2, oggetto, {headers})
  }
  deletePeople():Observable<any>{
    return this.http.delete<any>(urlMockServer + '/people/'+ this.userId)
  }
}