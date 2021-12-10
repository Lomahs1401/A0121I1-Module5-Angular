import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEmployee } from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  readonly URL_EMPLOYEE = "http://localhost:3000/employees";

  getAllEmployee(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.URL_EMPLOYEE);
  }
  createEmployee(employee: IEmployee) {
    return this.httpClient.post(this.URL_EMPLOYEE, employee);
  }
  updateEmployee(employee: IEmployee, id: string) {
    return this.httpClient.put(this.URL_EMPLOYEE + '/' + id, employee);
  }
  getById(id: string): Observable<IEmployee> {
    return this.httpClient.get<IEmployee>(this.URL_EMPLOYEE + '/' + id);
  }
  deleteById(id: string) {
    return this.httpClient.delete(this.URL_EMPLOYEE + '/' + id);
  }
  searchEmployee(name: string): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.URL_EMPLOYEE + "?name_like=" + name);
  }
}
