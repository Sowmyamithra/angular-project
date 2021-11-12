import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee: Employee = {
    sno: 'aa101',
    name: 'john',
    age: 35,
    designation: 'tech lead',
    doj: new Date(),
    salary: 5000
  }

  constructor() { }

  public getEmployee(): Employee{
    return this.employee;
  }

}
