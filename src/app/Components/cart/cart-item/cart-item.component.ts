import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Product } from 'src/Models/Product';
import { ProductListItem } from 'src/Models/ProductListItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
  @Input() index =''
  @Input() name =''
  @Input() id=''
  @Input() count='' 
  @Output() cartUpdate = new EventEmitter<number>();

  Product:Product = {
    productID: 0,
    productName: '',
    productPrice: 0,
    productDescription: ''
  }

  price = 0
  form = new FormGroup({
    "counter": new FormControl("", Validators.required)
  });

  ngOnInit(): void {
    this.productService.getProductByID(this.router.url, this.id).subscribe((x:Product) => {
      this.Product = x
      this.price = this.Product.productPrice * Number(this.count)
    })
  }
  
  removeFromCart(id:String){
    let cartArray = JSON.parse(String(localStorage.getItem("cart")))
    cartArray.forEach((element:ProductListItem, index:Number) => {
      if(element.id == Number(id)){
        cartArray.splice(index,1)
      }
    });
    localStorage.setItem('cart', JSON.stringify(cartArray))
    this.cartUpdate.emit(1)
  }

  setCount(id:String){
    let cartArray = JSON.parse(String(localStorage.getItem("cart")))
    cartArray.forEach((element:ProductListItem, index:Number) => {
      if(element.id == Number(id)){
        element.count = this.form.get('counter')?.value
        this.price = Number(this.Product.productPrice) * Number(this.count)
      }
    });
    localStorage.setItem('cart', JSON.stringify(cartArray))
    this.cartUpdate.emit(1)
  }

}
