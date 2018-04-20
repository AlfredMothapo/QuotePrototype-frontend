import { Component, OnInit } from '@angular/core';
import { User} from '../interfaces/user'
import {AuthService} from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string                     // login form properties
  password: any
  errorMessage :string = '* Both fields are required'
  loginErrorMessage  : string = ""
  tokenKey = 'token' //must be read from config file.

  constructor(private _authService: AuthService, private loginFormBuilder: FormBuilder) 
  { 
    this.loginForm = loginFormBuilder.group({
      'email' : [null,Validators.required],
      'password' : [null,Validators.required]
    })
  }
  ngOnInit() {
    this._authService.logOut()
  }
  loginUser(user) //login and register
  {
    this._authService.loginUser(user).subscribe((results)=>{
      localStorage.setItem(this.tokenKey,results.token)
      //authenticate user
      this._authService.AuthUser()
    },(error)=>{
        this.loginErrorMessage=error
    });
  }
}
