import { OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import 'rxjs/add/operator/catch';
import { decode } from "jwt-simple";
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "../../environments/environment";

const JWThelper = new JwtHelperService();

@Injectable()
export class AuthService implements OnInit{
    tokenKey = environment.tokenKey //must be read from config file.
    authUser : any
    UserType = environment.UserType
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
        location.reload()
    }
    AuthUser()
    {
        if(this.authUser==undefined){
            this.authUser = JWThelper.decodeToken(localStorage.getItem(this.tokenKey))['subject']
            console.log(this.authUser)
        }
        return this.authUser    
    }
    private errorHandler(error: HttpErrorResponse)
    {
        return new ErrorObservable("Wrong login details, please try again")
    }
}