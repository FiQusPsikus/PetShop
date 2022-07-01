import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListItem } from 'src/Models/ProductListItem';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() name = ''
  @Input() price = ''
  @Input() image = ''
  @Input() id = ''
  constructor() { }
  ngOnInit(): void {
  }

  addToCart(id:string, name:string): void{
    let cartItemObject: ProductListItem = {
      id: Number(id),
      productName: name,
      count: 1
    }

    let cartArray = JSON.parse(String(localStorage.getItem("cart")));
    if(!cartArray){
      cartArray = [];
    }

    let itemExists = false;
    cartArray.forEach((element:ProductListItem, index:number)=>{
      console.log(element.id);
      if(element.id == cartItemObject.id){
        element.count += 1
        itemExists = true;
      }
    })

    if(!itemExists){
      cartArray.push(cartItemObject)
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
    alert("Produkt dodano do koszyka !")
  }

}


