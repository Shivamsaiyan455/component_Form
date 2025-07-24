import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/Login/login.component';
import { RegisterComponent } from './components/Register/register.component';

const routes: Routes = [
  {
     path: '', component: WelcomeComponent ,
  },
  {
    path :'login', component: LoginComponent,

  },
  {
     path :'register', component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
