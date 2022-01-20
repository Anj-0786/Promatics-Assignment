import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';
import {Router }from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(private http: HttpClient, router: Router) {}
  login(data: any): Observable<any>{
    return this.http.get<any>('http://34.93.237.153:8901/users?email='+data.email);
  }




}
