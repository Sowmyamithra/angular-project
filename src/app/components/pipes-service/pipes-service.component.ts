import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-pipes-service',
  templateUrl: './pipes-service.component.html',
  styleUrls: ['./pipes-service.component.css']
})
export class PipesServiceComponent implements OnInit {

  public employee!: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployee();
  }

}
