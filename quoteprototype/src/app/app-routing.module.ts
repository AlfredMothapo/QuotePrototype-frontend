import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: 'quotes-dashboard',
    component: QuoteComponent ,
 //  data : {}
 },
 {
   path : 'app-login',
   component : LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
