import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Category } from 'src/Models/Category';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private productService:ProductService) { }
  user = 0
  categories:Category[] = [];
  ngOnInit(): void {
    this.login()
    this.productService.getCategoryList(this.router.url).subscribe((x:Category[]) => {
      this.categories = x
    })
  }

  logout(): void{
    localStorage.setItem('user', "0")
    this.user = 0
  }

  login(): void{
    if(localStorage.getItem('user')){
      if(localStorage.getItem('user') != "0"){
        let user = JSON.parse(String(localStorage.getItem("user")))
        if(user.user_id){
          this.user = user.user_id
        }
      }
    }
  }

}
