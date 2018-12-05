import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CalcComponent } from './calc/calc.component';
import { NameComponent } from './name/name.component';
import { CountryComponent } from './country/country.component';
import { EmployComponent } from './employ/employ.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'Calc', component: CalcComponent },
  { path: 'Name', component: NameComponent },
  { path: 'Country', component: CountryComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '', component: EmployComponent },
  //{path:'',component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CalcComponent,
    NameComponent,
    CountryComponent,
    EmployComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
