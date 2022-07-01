import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Category } from 'src/Models/Category';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router,) { }
  categories:Category[] = []
  ngOnInit(): void {
    this.productService.getCategoryList(this.router.url).subscribe((x:Category[]) => {
      this.categories = x
    })
  }

  removeCategory(id:number):void {
    // this.productService.removeCategory(id).subscribe((x) => {})
  }

}
