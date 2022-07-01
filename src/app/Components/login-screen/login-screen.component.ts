import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';
// import { User } from 'src/Models/User';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent implements OnInit {
  constructor(private userService:UserService, private router:Router) { }

  // user:User = {
  //   user_id: '',
  //   first_name: '',
  //   last_name: '',
  //   user_name: '',
  //   address: '',
  //   city: '',
  //   post_code: ''
  // }

  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  onSubmitModelBased() {
    this.userService.loginRequest(this.form.value).subscribe(data => {
      console.log(data)
      if(data){
        if(data.Error){
          alert('Nie znaleziono użytkownika.')
        }else{
          localStorage.setItem('user', JSON.stringify(data))
          localStorage.setItem('token', data.token)
          window.location.reload()
        }
      }
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('user') != "0"){
      this.router.navigate(['/'])
    }
  }
}
