import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCardModule,MatGridListModule,MatToolbarModule,MatIconModule,MatExpansionModule,
  MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteApiService } from './services/quotes-api-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { EditDialog } from './dialogs/editDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    EditDialog
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
  ],
  providers: [QuoteApiService],
  bootstrap: [AppComponent],
  entryComponents: [EditDialog]
})
export class AppModule { }
