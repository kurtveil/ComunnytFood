import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
// import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MaterialModule
    // ComponentsModule,
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }
