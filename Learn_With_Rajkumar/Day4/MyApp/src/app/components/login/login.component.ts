import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:string="admin";

  constructor(private router:Router) { }

  ngOnInit(): void {
    sessionStorage.setItem("auth","false");
  }

  doLogin(){
    if(this.userid==="admin"){
      // Do Navigate
      sessionStorage.setItem("auth","true");
      this.router.navigate(['dboard']);
    } else {
      alert("Invalid Login");
    }
  }
}
