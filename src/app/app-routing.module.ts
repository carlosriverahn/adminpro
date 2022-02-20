import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpagefoundComponent } from './pages/nopagefound/nopagefound.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', component: NotpagefoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

