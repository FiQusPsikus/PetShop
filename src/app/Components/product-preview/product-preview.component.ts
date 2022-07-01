import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Product } from 'src/Models/Product';
import { ProductListItem } from 'src/Models/ProductListItem';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
 
export class ProductPreviewComponent implements OnInit {
  
  constructor(private productService: ProductService, private router: Router, private route:ActivatedRoute) { }
    description = ''
    image = ''
    price = 0

    Product:Product = {
      productID: 0,
      productName: '',
      productPrice: 0,
      productDescription: ''
  }

  id = this.route.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id');
    this.productService.getProductByID(this.router.url, String(this.id)).subscribe((x:Product) => {
      this.Product = x
    })
  }

  addToCart(id:number, name:string): void{
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
