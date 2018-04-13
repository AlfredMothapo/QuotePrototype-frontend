import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../services/quotes-api-service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { EditDialog } from '../dialogs/editDialog.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private _quotesApiService : QuoteApiService,private dialog: MatDialog) { }
  newQuote = {}
  quotes = this._quotesApiService.quotes
  ngOnInit() {
    this._quotesApiService.getAllQuotes()
  }
  saveQuote(){
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
    dialogConfig.disableClose = true;
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
