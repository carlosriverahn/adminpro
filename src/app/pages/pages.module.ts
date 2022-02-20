import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotpagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    PagesComponent,
    Graphics1Component,
    DashboardComponent,
    NotpagefoundComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    Graphics1Component,
    DashboardComponent,
    NotpagefoundComponent,
    PagesComponent
  ]
})
export class PagesModule { }
