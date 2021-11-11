import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {

  public inputType: string = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  public showPassword(event: any): void{
    this.inputType = (event.target.checked) ? 'text' : 'password';
  }

}
