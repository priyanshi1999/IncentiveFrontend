import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalespersonRoutingModule } from './salesperson-routing.module';
import { SalespersonComponent } from './salesperson.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    SalespersonComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SalespersonRoutingModule,
    MatToolbarModule,
    NgChartsModule 
  ]
})
export class SalespersonModule { }
