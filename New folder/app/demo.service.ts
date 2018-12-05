import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  sayHello() : string {
    return "Hello World";
  }

  logout() : string {
    return "Evening 7 Please log out";
  }

  constructor() { }

}
