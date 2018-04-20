import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../services/quotes-api-service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { EditDialog } from '../dialogs/editDialog.component';
import { Quote } from '../interfaces/quote';
import { AuthService } from '../services/auth.service';
import { InsertDialog } from '../dialogs/insert-dialog.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private _quotesApiService : QuoteApiService,private dialog: MatDialog,private _authService : AuthService) {
   
   }
  newQuote = {}
  quotes = []
  authUser ;
  UserType = this._authService.UserType
  errorMessage : string

  ngOnInit() {
    this.quotes.push(this._quotesApiService.getAllQuotes())
  }
  saveQuote(quote){

    quote.Source==null ? quote.Source='Anonymous' :  //do nothing
    this.quotes.push(quote)
    this._quotesApiService.saveQuote(quote).subscribe(()=>{
       //update quotes
       this._quotesApiService.getAllQuotes() //to update the id of the newly inserted code for incase we might want to delete it since the id is set auto by db.
    },(error)=>{
      this.errorMessage=error
    })
  }
  updateQuote(updatedQuote)
  {
    this._quotesApiService.updateQuote(updatedQuote).subscribe(()=>{
      //do nothing on success
    },(error)=>{
      this.errorMessage=error
    })
  }
  openEditDialog(Quote) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = Quote
    const dialogRef =this.dialog.open(EditDialog, dialogConfig);
    //get the data after the dialog is closed
    dialogRef.afterClosed().subscribe((data)=>{
      if(data){
        this.updateQuote(data);
      }
    })
  }
  openInsertDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef =this.dialog.open(InsertDialog, dialogConfig);
    //get the data after the dialog is closed
    dialogRef.afterClosed().subscribe((data)=>{
      if(data){
        this.saveQuote(data);
      }
    })
  }

}
