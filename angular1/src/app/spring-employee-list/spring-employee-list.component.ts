import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';

import { Router } from '@angular/router';

@Component({
  selector: 'app-spring-employee-list',
  templateUrl: './spring-employee-list.component.html',
  styleUrls: ['./spring-employee-list.component.css'],
})
export class SpringEmployeeListComponent implements OnInit {
  employee?: Employees[];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getemployee();
  }
  getemployee() {
    this.employeeService.getemployee().subscribe((data) => {
      this.employee = data;
    });
  }
  updateemployeerecord(id?: number) {
    console.log('id=', id);
    this.router.navigate(['update-employee']);
    this.employeeService.getid(id);
  }
  deleteid(id?: number) {
    this.employeeService.deleteid(id).subscribe();
    this.router.navigate(['employee']);
    window.location.reload();
  }
}
