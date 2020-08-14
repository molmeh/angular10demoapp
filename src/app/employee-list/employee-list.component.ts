import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  EmployeeListData: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData(){
    this.employeeService.getEmployeeList().subscribe(EmployeeListData => this.EmployeeListData = EmployeeListData);
  }

  removeEmployee(emp: Employee) {
    this.employeeService.removeEmployee(emp);
  }

}
