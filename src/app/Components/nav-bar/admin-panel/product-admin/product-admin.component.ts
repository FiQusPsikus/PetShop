import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Category } from 'src/Models/Category';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }
  categories:Category[] = []
  products:Product[] = []
  
  form = new FormGroup({
    "category": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
    "price": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
  });
  
  ngOnInit(): void {
    this.productService.getCategoryList(this.router.url).subscribe((x:Category[]) => {
      x.forEach(x=>{
        this.productService.getProductList(this.router.url,String(x.categoryID)).subscribe((products:Product[]) => {
          products.forEach(product=>{
            this.products.push(product)
          })
        })
      })
    })
  }

  onSubmitModelBased() {
    console.log(this.form.value)
    this.productService.addProduct(this.form.value).subscribe(data => {
      let product:Product = {
        productID: data.insertId,
        productName: this.form.value.name,
        productPrice: this.form.value.price,
        productDescription: this.form.value.description
      }
      this.products.push(product)
    })
  }

  removeProduct(id:number):void {
    this.productService.removeProduct(id).subscribe((x) => {})
    this.products.forEach((element,index) => {
      if(element.productID == id){
        this.products.splice(index,1)
      }
    })
  }

}
