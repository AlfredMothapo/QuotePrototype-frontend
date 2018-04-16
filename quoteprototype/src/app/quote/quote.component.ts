import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../services/quotes-api-service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { EditDialog } from '../dialogs/editDialog.component';
import { Quote } from '../interfaces/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private _quotesApiService : QuoteApiService,private dialog: MatDialog) { }
  newQuote = {}
  quotes = []
  
  ngOnInit() {
    this.quotes.push(this._quotesApiService.getAllQuotes())
  }
  saveQuote(){
    this.newQuote['Attributed_to']==null ? this.newQuote['Attributed_to']='Anonymous' :  //do nothing
    this.quotes.push(this.newQuote)
    this._quotesApiService.saveQuote(this.newQuote)
  }
  deleteQuote(id)
  {
    this._quotesApiService.deleteQuote(id)
  }
  updateQuote(updatedQuote)
  {
    this._quotesApiService.updateQuote(updatedQuote)
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

}
