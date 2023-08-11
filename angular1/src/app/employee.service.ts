import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  Employees(employee: Employees) {
    throw new Error('Method not implemented.');
  }
  baseURL = 'http://localhost:8080/api/v1/employee';
  id?: number;
  constructor(private httpClient: HttpClient) {}
  getemployee(): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(`${this.baseURL}`);
  }
  addemployee(employee?: Employees): Observable<object> {
    return this.httpClient.post<object>(`${this.baseURL}`, employee);
  }
  getid(getid?: number) {
    this.id = getid;
  }
  getemployeebyid(): Observable<object> {
    return this.httpClient.get<object>(`${this.baseURL}/${this.id}`);
  }
  updateemployeebyid(employee?: Employees): Observable<object> {
    return this.httpClient.put<object>(`${this.baseURL}/${this.id}`, employee);
  }
  deleteid(id?: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.baseURL}/${id}`);
  }
}
