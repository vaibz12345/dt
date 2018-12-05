import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : Http) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get
    ("http://localhost:8080/ftp88/api/employees")
      .map((res : Response) => res.json());
  }

  showEmployees(empId): Observable<Employee> {
    return this.http.get("http://localhost:8080/ftp88/api/employees/" +empId)
      .map((res : Response) => res.json());
  }

  showManager(empId): Observable<Employee> {
    return this.http.get("http://localhost:8080/ftp88/api/employees/" +empId)
      .map((res : Response) => res.json());
  }


}
