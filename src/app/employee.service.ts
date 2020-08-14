import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Employee } from './employee';
import { EmployeeList } from './employee-list-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeList(): Observable<Employee[]>{
    return of(EmployeeList);
  }

  getEmployeeById(employee: Employee){
    return employee
  }

  addEmployee(employee: Employee){
    EmployeeList.push(employee);
    let message = "Employee Added!"
    return message;
  }

  updateEmployee(employee: Employee){
    const index: number = EmployeeList.indexOf(employee);
    if (index !== -1) {
      EmployeeList[index] = employee;
      let message = "Employee Updated!"
      return message;
    }
    else{
      let message = "Employee Not Updated!"
      return message;
    }
  }

  removeEmployee(employee: Employee) {
    const index: number = EmployeeList.indexOf(employee);
    if (index !== -1) {
      EmployeeList.splice(index, 1);
      let message = "Employee Deleted!"
      return message;
    }else{
      let message = "Employee Not Deleted!"
      return message;
    }
  }
}
