import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login();
  constructor(private router : Router) {
    this.model.userName=localStorage.getItem("name");
   }
   Login() {
     if(this.model.passWord=="Hexaware") {
       this.router.navigate(["/Dashboard"]);
     }
     else {
       alert("invalid");
     }
   }

  ngOnInit() {
  }

}
