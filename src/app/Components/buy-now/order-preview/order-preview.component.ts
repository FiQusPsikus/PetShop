import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Product } from 'src/Models/Product';
import { ProductListItem } from 'src/Models/ProductListItem';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router,private route:ActivatedRoute) { }
  
  buyNow:Number = 0
  cartList: Array<ProductListItem> = []
  buyNowName:String=''
  Price:number = 0
  product:Product = {
    productID: 0,
    productName: '',
    productPrice: 0,
    productDescription: ''
  }
  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    if(this.router.url.match("/buy_now\/item/")){
      
      this.productService.getProductByID(this.router.url,String(this.id)).subscribe((x:Product) => {
        this.product = x
        this.buyNowName = this.product.productName
        this.Price = this.product.productPrice 
      })
      this.buyNow = 1
    }else{
      this.cartList = JSON.parse(String(localStorage.getItem("cart")))
      this.cartList.forEach((element:ProductListItem)=>{
        this.productService.getProductByID(this.router.url,String(element.id)).subscribe((x:Product) => {
          this.product = x
          this.buyNowName = this.product.productName
          this.Price += this.product.productPrice*element.count
        })
      })
    }
  }
}
