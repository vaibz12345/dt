import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { ManagerShowComponent } from './manager-show/manager-show.component';


const appRoutes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: '', component: EmployeeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    DashboardComponent,
    EmployShowComponent,
    ManagerShowComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
