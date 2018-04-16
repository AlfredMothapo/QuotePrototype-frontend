import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuoteApiService } from '../services/quotes-api-service';

@Component({
    selector: 'edit-dialog',
    templateUrl: "./edit-dialog.html",
  })
  export class EditDialog {
   Quote : string;
    constructor(
      public dialogRef: MatDialogRef<EditDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any, private _quoteApiService : QuoteApiService) { this.Quote = data }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    save() {
      this.dialogRef.close(this.Quote);
    }
    close() {
      this.dialogRef.close();
    }
    deleteQuote(id)
    {
      this._quoteApiService.deleteQuote(id)
      this.close()
    }
  
  }