import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuoteApiService } from '../services/quotes-api-service';
import { User } from '../interfaces/user';
import { UsersApiService } from '../services/users-api-service';

@Component({
    selector: 'edit-dialog',
    templateUrl: "./edit-user-dialog.html",
  })
  export class EditUserDialog {
   User : User;
   selectedValue: any
   UserTypes = [{name:"Reader",value:0},{name:"Editor",value:1},{name:"Admin",value:2}];
   
    constructor(
      public dialogRef: MatDialogRef<EditUserDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any, private _userService : UsersApiService) { this.User = data }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    save() {
        this.User.user_type = this.selectedValue
        this.dataCallback(this.User)
    }
    close() {
      this.dialogRef.close();
    }
    dataCallback(data)
    {
        this.dialogRef.close(data);//pass the id 
    }
    getUserType(userTypeId)
    {
      switch(userTypeId){
        case 1 : return "Editor"
        case 2 : return "Admin"
        default : return "Reader"
      }
    }
  }