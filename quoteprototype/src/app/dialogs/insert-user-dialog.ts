import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuoteApiService } from '../services/quotes-api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'insert-user-dialog',
    templateUrl: "./insert-user-dialog.html",
  })
  export class AddUserDialog {
    AddUserForm: FormGroup;
    Name: string                     // login form properties
    Password: any
    Email: any
    UserType: number
    selected : number
    errorMessage :string = '* This field is required'
//    Quote = {};
    constructor(public dialogRef: MatDialogRef<AddUserDialog>,private AddUserFormBuilder: FormBuilder) { 
        this.AddUserForm = AddUserFormBuilder.group({
            'Name' : [null,Validators.required],
            'Email' : [null,Validators.required],
            'Password': [],
            'UserType': [null,Validators.required]
        })
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    save(user) {
      this.dialogRef.close(user);
    }
    close() {
      this.dialogRef.close();
    }
  
  }