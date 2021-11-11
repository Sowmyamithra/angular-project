import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public count: number = 0;

  public incrementCount(): void{
    this.count = this.count + 1;
  }

  public decrementCount(): void{
    this.count = (this.count > 0) ? (this.count - 1) : 0;
  }

}
