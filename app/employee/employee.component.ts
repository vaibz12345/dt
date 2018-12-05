import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : Observable<Employee[]>;

  constructor(private EmployeeService : EmployeeService, private router : Router) {
    this.employees = EmployeeService.getEmployees();
   }

   Dashboard(empId,mgrId) {
     localStorage.setItem("empId",empId);
     localStorage.setItem("MID",mgrId);
     this.router.navigate(["/Dashboard"]);
   }
  ngOnInit() {
  }

}
