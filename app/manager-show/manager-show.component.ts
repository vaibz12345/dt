import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-show',
  templateUrl: './manager-show.component.html',
  styleUrls: ['./manager-show.component.css']
})
export class ManagerShowComponent implements OnInit {

  empId : number;
  employee: Observable<Employee>;
  constructor(private EmployeeService : EmployeeService) {
    this.empId = parseInt(localStorage.getItem("MID"));
    this.employee = EmployeeService.showManager(this.empId);
   }

  ngOnInit() {
  }

}
