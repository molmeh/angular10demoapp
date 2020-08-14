import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = {
    id : undefined,
    name : '',
    department : '',
    salary : undefined
  }

  EmployeeListData: Employee[];
  
  constructor(private employeeService: EmployeeService, private location: Location) { }

  ngOnInit() {
    this.getEmployeeData();
    let max_id = Math.max.apply(Math, this.EmployeeListData.map(function(o) { return o.id; })); // find maximum id from list(Array)
    if(max_id > 0){
      this.employee.id = max_id + 1; // set +1 id to html
    }else{
      this.employee.id = 1;
    }
  }

  addEmployee(emp: Employee){
      this.employeeService.addEmployee(emp);
      this.location.back();
  }

  getEmployeeData(){
    this.employeeService.getEmployeeList().subscribe(EmployeeListData => this.EmployeeListData = EmployeeListData);
  }

}
