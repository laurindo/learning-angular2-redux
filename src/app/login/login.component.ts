import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  test = false;
  active = '';

  doLogin() {
    this.test = true;  
  }

  doSignup() {
    this.active = 'active';
  }

  ngOnInit() { 

  }

}
