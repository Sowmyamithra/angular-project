import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';


@Component({
  selector: 'app-pipes-model',
  templateUrl: './pipes-model.component.html',
  styleUrls: ['./pipes-model.component.css']
})
export class PipesModelComponent implements OnInit {

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
