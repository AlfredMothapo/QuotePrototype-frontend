import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'edit-dialog',
    templateUrl: "./open-dialog.html",
  })
  export class EditDialog {
   Quote : string;
    constructor(
      public dialogRef: MatDialogRef<EditDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { this.Quote = data }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    save() {
      this.dialogRef.close(this.Quote);
    }
    close() {
      this.dialogRef.close();
  }
  
  }