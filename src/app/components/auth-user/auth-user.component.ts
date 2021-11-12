import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {

  public isLoggedIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public logIn(): void{
    this.isLoggedIn = true;
  }

  public logOut(): void{
    this.isLoggedIn = false;
  }

}
