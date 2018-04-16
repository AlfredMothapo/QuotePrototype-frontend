import { OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService implements OnInit{
    tokenKey = 'token' //must be read from config file.
    constructor(private http:HttpClient){
    }
    ngOnInit(){
    }
    loginUser(user)
    {
        return this.http.post<any>("http://localhost:8000/login",user).catch(this.errorHandler)
    }
    isAuthenticated()
    {
        return !!localStorage.getItem( this.tokenKey )
    }
    logOut()
    {
        localStorage.removeItem(this.tokenKey)
    }
    private errorHandler(error: HttpErrorResponse)
    {
        return new ErrorObservable("Wrong login details, please try again")
    }
}