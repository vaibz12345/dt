import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employ-show',
  templateUrl: './employ-show.component.html',
  styleUrls: ['./employ-show.component.css']
})
export class EmployShowComponent implements OnInit {



  empId : number;
  employee: Observable<Employee>;
  constructor(private EmployeeService : EmployeeService) {
    this.empId = parseInt(localStorage.getItem("empId"));
    this.employee = EmployeeService.showEmployees(this.empId);
   }

  ngOnInit() {
  }

}
