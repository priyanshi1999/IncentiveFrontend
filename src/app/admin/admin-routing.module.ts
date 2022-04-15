import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminModule } from './admin.module';
import { HomeComponent } from './components/home/home.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'upload',
        component: UploadfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
