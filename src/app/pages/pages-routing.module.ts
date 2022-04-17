import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { NotpagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RjxsComponent } from './rjxs/rjxs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data:  { title: 'Dashboard' }},
      { path: 'progress', component: ProgressComponent, data:  { title: 'Progress' }},
      { path: 'graphics1', component: Graphics1Component, data:  { title: 'Graphics1' }},
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account-settings'}},
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises'}},
      { path: 'rxjs', component: RjxsComponent, data: { title: 'rxjs'}},
    ]
   },
  { path: 'notpagefound', component: NotpagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
