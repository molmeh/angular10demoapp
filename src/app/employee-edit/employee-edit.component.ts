import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  EmployeeListData: Employee[];

  employee: Employee = {
    id: undefined,
    name: '',
    department: '',
    salary: undefined
  }

  constructor(private route:ActivatedRoute, private employeeService: EmployeeService, private location: Location) { }

  ngOnInit() {
    this.getEmployeeData();
    let emp_id = Number(this.route.snapshot.paramMap.get('id')); //converting String to number
    let result = this.EmployeeListData.find((c) => c.id === emp_id);
    this.employee = result;
  }
  getEmployeeData(){
    this.employeeService.getEmployeeList().subscribe(EmployeeListData => this.EmployeeListData = EmployeeListData);
  }

  editEmployee(employee){
    this.employeeService.updateEmployee(employee);
    this.location.back();
  }
}
