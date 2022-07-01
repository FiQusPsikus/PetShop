import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderData } from 'src/Models/OrderData';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getOrderList():Observable<OrderData[]>{
    return this.http.get<OrderData[]>("https://petshopbackendkf.herokuapp.com/ordersList")
  }

  getOrderDescription(id:Number):Observable<String>{
    return this.http.get<String>("https://petshopbackendkf.herokuapp.com/orderDetails?id="+id)
  }

  setOrderState(orderID:Number, stateID:Number):Observable<any>{
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': String(localStorage.getItem('token')) };
    let orderDetails = {
      orderID: orderID,
      stateID: stateID
    } 
    const body = JSON.stringify(orderDetails);
    return this.http.post("https://petshopbackendkf.herokuapp.com/setOrderState", body, {headers: headers})
  }
}
