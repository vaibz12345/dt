import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users : Observable<User[]>;

  constructor(private UserService : UserService) {
    this.users = UserService.getUsers();
   }

  ngOnInit() {
  }

}
