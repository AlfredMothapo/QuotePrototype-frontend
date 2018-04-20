import { OnInit, Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";


@Injectable()
export class UsersApiService implements OnInit{
    users : User[]
    constructor(private http:HttpClient){

    }
    ngOnInit(){
    }
    getAllUsers()
    {
      return this.http.get("http://localhost:8000/getAllUsers").catch(this.errorHandler)
    }
    updateUserType(user:User)
    {
      return this.http.post("http://localhost:8000/updateUserType",user).catch(this.errorHandler)
    }
    addUser(user)
    {
      return this.http.post("http://localhost:8000/addUser",user).catch(this.errorHandler)
    }
    deleteUser(id)
    {
      return this.http.delete("http://localhost:8000/deleteUser/"+id).catch(this.errorHandler)
    }
    private errorHandler(error: HttpErrorResponse)
    {
        return new ErrorObservable("An error occured, please try again "+error.message)
    }
}