import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuoteApiService } from '../services/quotes-api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'insert-dialog',
    templateUrl: "./insert-dialog.html",
  })
  export class InsertDialog {
    InsertQuoteForm: FormGroup;
    Attributed_to: string                     // login form properties
    Source: string
    Year: number
    Quote: string
    errorMessage :string = '* This field is required'
//    Quote = {};
    constructor(public dialogRef: MatDialogRef<InsertDialog>,private insertQuoteFormBuilder: FormBuilder) { 
        this.InsertQuoteForm = insertQuoteFormBuilder.group({
            'Quote' : [null,Validators.required],
            'Attributed_to' : [null,Validators.required],
            'Source': [],
            'Year': []
            
        })
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    save(quote) {
      this.dialogRef.close(quote);
    }
    close() {
      this.dialogRef.close();
    }
  
  }