import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
 {
   path : 'users',
   component : UserManagementComponent
 },
 {
   path: 'dashboard',
   component : DashboardComponent
 },
 {
  path: '',
  component : DashboardComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
