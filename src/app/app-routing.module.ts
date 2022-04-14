import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './salesperson/components/home/home.component';

const routes: Routes = [
  {
    path:'salesperson',
    loadChildren: () => import('./salesperson/salesperson.module').then(m=>m.SalespersonModule)
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"home",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
