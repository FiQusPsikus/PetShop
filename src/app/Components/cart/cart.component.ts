import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductListItem } from 'src/Models/ProductListItem';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor() { }
  cartList: Array<ProductListItem> = []

  ngOnInit(): void {
    this.renewList()
  }

  public renewList():void{
    this.cartList = JSON.parse(String(localStorage.getItem("cart")))
  }
  
}
