import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  model = new DemoService();
  name : string;
  constructor(private router :Router) {
    alert(this.model.sayHello());
    alert(this.model.logout());
  }


  show(name)
   {
     this.name = name;
     localStorage.setItem("name",name);
     this.router.navigate(["/Login"]);
   }

  employs = [
    new Employ(1, 'Naren','Angular','Manager', 88233),
    new Employ(2, 'Ranjith','React','Developer', 84233),
    new Employ(3, 'Vamsi','Node','TeamLead', 87733),
    new Employ(4, 'Pavan','UI','Sr. Programmeer', 84513),
    new Employ(5, 'Harsha','Java','Expert', 87433),
  ];
  ngOnInit() {
  }

}
