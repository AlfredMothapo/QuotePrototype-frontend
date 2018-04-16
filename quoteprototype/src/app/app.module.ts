import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCardModule,MatGridListModule,MatToolbarModule,MatIconModule,MatExpansionModule,
  MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteApiService } from './services/quotes-api-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { EditDialog } from './dialogs/editDialog.component';
import { RouterModule, Routes } from '@angular/router';
import {UsersApiService} from './services/users-api-service';
import { LoginComponent } from './login/login.component';
import {AuthService} from './services/auth.service';
import {AuthInterceptorService} from './services/authInterceptor.service';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    EditDialog,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [QuoteApiService,UsersApiService,AuthService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents: [EditDialog]
})
export class AppModule { }
