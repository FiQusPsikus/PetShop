import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "login": new FormControl("", Validators.required),
    "address": new FormControl("", Validators.required),
    "post_code": new FormControl("", Validators.required),
    "city": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required),
  });

  onSubmitModelBased() {
    this.userService.registerRequest(this.form.value).subscribe(data => {
    })
  }
  ngOnInit(): void {
    if(localStorage.getItem('user') != "0"){
      this.router.navigate(['/'])
    }
  }

}
