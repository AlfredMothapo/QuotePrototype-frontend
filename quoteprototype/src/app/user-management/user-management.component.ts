import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersApiService } from '../services/users-api-service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { EditUserDialog } from '../dialogs/edit-user-dialog';
import { isNumber } from 'util';
import { User } from '../interfaces/user';
import { AddUserDialog } from '../dialogs/insert-user-dialog';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private _authService :AuthService, private _usersService : UsersApiService,private dialog: MatDialog) { }
  errorMessage : string
  users = []
  user_type : string
  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers()
  {
    this._usersService.getAllUsers().subscribe((results)=>{

      this.users = results

    },(error)=>{

      this.errorMessage = error

    })
  }
  openEditUserDialog(User) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = User
    const dialogRef =this.dialog.open(EditUserDialog, dialogConfig);
    //get the data after the dialog is closed
    dialogRef.afterClosed().subscribe((data)=>{

      if(data){
        isNumber(data) ? this.deleteUser(data) : this.updateUserType(data)
      }
    })
  }
  deleteUser(id){
    this._usersService.deleteUser(id).subscribe(()=>{
      //remove the user from the UI
      for(var i=0; i<this.users.length; i++)
      {
        if(this.users[i].id==id)
        {
          this.users.splice(i,1)
        }
      }
    },(error)=>{
      this.errorMessage=error
    })
  }
  updateUserType(user : User)
  {
    this._usersService.updateUserType(user).subscribe(()=>{

    },(error)=>{
      this.errorMessage = error
    })
  }
  //move to config to avoid duplicates
  getUserType(userTypeId)
  {
    switch(userTypeId){
      case 1 : return "Editor"
      case 2 : return "Admin"
      default : return "Reader"
    }
  }
  openAddUserDialog()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef =this.dialog.open(AddUserDialog, dialogConfig);
    //get the data after the dialog is closed
    dialogRef.afterClosed().subscribe((data)=>{
      if(data){
        this.saveUser(data);
      }
    })
  }
  saveUser(user : User)
  {
    this._usersService.addUser(user).subscribe(()=>{
      // this.users.push(<User>user) 
      this.getAllUsers() //to get the id for user that was just uploaded
    },(error)=>{
      this.errorMessage = error
    })
  }
}
