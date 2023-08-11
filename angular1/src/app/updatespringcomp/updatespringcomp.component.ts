import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatespringcomp',
  templateUrl: './updatespringcomp.component.html',
  styleUrls: ['./updatespringcomp.component.css'],
})
export class UpdatespringcompComponent implements OnInit {
  employee: Employees = new Employees();
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.getemployeebyid();
  }
  updateemployee(id?: number) {
    console.log(this.employee);
    this.employeeService.updateemployeebyid(this.employee).subscribe();
    this.router.navigate(['employee']);
  }
  getemployeebyid() {
    this.employeeService.getemployeebyid().subscribe((data) => {
      this.employee = data;
    });
  }
}
