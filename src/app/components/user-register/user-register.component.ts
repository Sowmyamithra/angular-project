import { Component, OnInit } from '@angular/core';

interface User{
  name: string,
  email: string,
  password: string,
  designation: string,
  biography: string,
  terms: boolean
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user: User = {
    name: '',
    email: '',
    password: '',
    designation: '',
    biography: '',
    terms: false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  public registerUser(): void{
    console.log(this.user);
  }

}
