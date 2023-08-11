import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee: Employees = new Employees();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addemployee() {
    this.employeeService.addemployee(this.employee).subscribe(
      (data: any) => {
        console.log(data);
        this.gotoEmployeeList();
      },
      (error: any) => console.log(error)
    );
  }
  gotoEmployeeList() {
    this.router.navigate(['/employee']);
  }
  onSubmit() {
    console.log(this.employee);
    this.addemployee();
  }
}
