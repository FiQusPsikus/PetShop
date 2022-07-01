import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/Models/Product';
import { OrderData } from 'src/Models/OrderData';
import { ProductOrderData } from 'src/Models/ProductOrderData';
import { Category } from 'src/Models/Category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(value:Product):Observable<any>{
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': String(localStorage.getItem('token')) };
    const body = JSON.stringify(value);
    return this.http.post("https://petshopbackendkf.herokuapp.com/addProduct", body, {headers: headers})
  }
  
  removeProduct(id: number):Observable<any>{ 
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': String(localStorage.getItem('token')) };
    let Product = {
      id: id
    } 
    const body = JSON.stringify(Product);
    return this.http.post("https://petshopbackendkf.herokuapp.com/prodRemove", body, {headers: headers})
  }

  getProductList(router:String, id:String):Observable<Product[]>{
    return this.http.get<Product[]>("https://petshopbackendkf.herokuapp.com/productList?category="+id)
  }
  
  getProductByID(router:String,id:String):Observable<Product>{
    return this.http.get<Product>("https://petshopbackendkf.herokuapp.com/productGet?id="+id)
  }

  placeOrder(formValues:OrderData, productIDs: Array<ProductOrderData>):Observable<any>{
    const headers = { 'content-type': 'application/json' } 
    let postObject = {
      formValues: formValues,
      productIDs: productIDs
    }
    const body = JSON.stringify(postObject);
    return this.http.post("https://petshopbackendkf.herokuapp.com/placeOrder", body, {headers: headers})
  }

  getCategoryList(router:String):Observable<Category[]>{
      return this.http.get<Category[]>("https://petshopbackendkf.herokuapp.com/categoryList")
  }
}
