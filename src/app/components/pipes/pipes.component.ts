import { Component, OnInit } from '@angular/core';

interface Employee{
  sno: string,
  name: string,
  age: number,
  designation: string,
  doj: Date,
  salary: number
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public employee: Employee = {
    sno: 'aa101',
    name: 'john',
    age: 35,
    designation: 'Tech Lead',
    doj: new Date(),
    salary: 5000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
