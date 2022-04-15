import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    HomeComponent,
    UploadfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatDialogModule
  ]
})
export class AdminModule { }
