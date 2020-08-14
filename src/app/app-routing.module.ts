import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import {EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', redirectTo:'/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent },
  { path: 'add-employee', component: EmployeeAddComponent},
  { path: 'edit-employee/:id', component: EmployeeEditComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
