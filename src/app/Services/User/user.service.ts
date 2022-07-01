import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/Models/Login';
import { Register } from 'src/Models/Register';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }

  loginRequest(person:Login):Observable<any>{
    const headers = { 'content-type': 'application/json' } 
    const body = JSON.stringify(person);
    return this.http.post("https://petshopbackendkf.herokuapp.com/login", body, {headers: headers})
  }

  registerRequest(person:Register):Observable<any>{
    const headers = { 'content-type': 'application/json' } 
    const body = JSON.stringify(person);
    return this.http.post("https://petshopbackendkf.herokuapp.com/register", body, {headers: headers})
  }
}
