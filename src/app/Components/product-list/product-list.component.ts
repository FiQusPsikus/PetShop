import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Product } from 'src/Models/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route:ActivatedRoute) { }
  products: Product[] = []
  ngOnInit(): void {
    this.getRouteData()
    
  }
  
  getRouteData() {
    this.route.params.subscribe(() => {
      this.getProductList()
    }); 
  } 

  getProductList(): void{
    let route = this.route.snapshot.paramMap.get('id');
    this.productService.getProductList(this.router.url, String(route)).subscribe((x:Product[]) => {
      this.products = x
    })
  }
}
