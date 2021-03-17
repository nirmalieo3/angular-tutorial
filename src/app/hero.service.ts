import { HeroTable } from './module/hero';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const apiUrl = "https://run.mocky.io/v3/6d8e2f66-dcbc-4f1a-8bff-eee1fcadcff4"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }
  getProducts():Observable<HeroTable[]>{
    return this.http.get<HeroTable[]>(apiUrl);
}
}