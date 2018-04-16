import { OnInit, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class UsersApiService implements OnInit{

    constructor(private http:HttpClient){
    }
    ngOnInit(){
    }
}