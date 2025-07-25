import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/Login/login.component';
import { RegisterComponent } from './components/Register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
     path: '', component: WelcomeComponent ,
  },
  {
    path :'login', component: LoginComponent,

  },
  {
     path :'register', component: RegisterComponent
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
