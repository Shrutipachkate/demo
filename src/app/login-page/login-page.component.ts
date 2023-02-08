import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(
    public router: Router
  ){

  }
  title = 'mainProject';
  email = '';
  password = '';

  ngOnInit() {

  }
  logInUser() {
    if (this.email == "shruti@gmail.com" && this.password == "shruti@123"){
    this.router.navigate(['/login-page']);
    }
    else {
      alert("user unauthorized")
    }
  }

}
