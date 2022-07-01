import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';
import { ProductListItem } from 'src/Models/ProductListItem';
import { ProductOrderData } from 'src/Models/ProductOrderData';
import { User } from 'src/Models/User';
@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {

  constructor(private productService: ProductService,private route: ActivatedRoute, private router:Router) { }
  
  user:User = JSON.parse(String(localStorage.getItem("user"))) ? JSON.parse(String(localStorage.getItem("user"))) 
  : {
    user_id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    address: '',
    city: '',
    post_code: '',
    phone: ''
  }

  form = new FormGroup({
    "firstName": new FormControl(this.user.first_name, Validators.required),
    "city": new FormControl(this.user.city, Validators.required),
    "lastName": new FormControl(this.user.last_name, Validators.required),
    "adress": new FormControl(this.user.address, Validators.required),
    "post_code": new FormControl(this.user.post_code, Validators.required),
    "phone": new FormControl(this.user.phone, Validators.required)
  });

  onSubmitModelBased() {
    let ProductIDs:Array<ProductOrderData> = []
    if(this.router.url.match("/buy_now\/item/")){
      let ProductObject = {
        productID: Number(this.route.snapshot.paramMap.get('id')),
        count: 1
      }
      ProductIDs.push(ProductObject)
    }else{
      let cartList = JSON.parse(String(localStorage.getItem("cart")))
      cartList.forEach((element:ProductListItem)=>{
        let ProductObject = {
          productID: element.id,
          count: element.count
        }
        ProductIDs.push(ProductObject);
      })
    }

    this.productService.placeOrder(this.form.value, ProductIDs).subscribe(data => {
      alert('Zamówienie złożono !')
      this.router.navigate(['/']);
    })
  }
  
  ngOnInit(): void {
  }

}
