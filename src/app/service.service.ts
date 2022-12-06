import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './ts';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url="";
  constructor(private _http:HttpClient) { }
  enroll(user:User){
   return this._http.post<any>(this.url,user);
  }
}
