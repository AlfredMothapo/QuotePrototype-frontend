import { OnInit, Injectable, Inject } from "@angular/core";
import { HttpInterceptor } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()

export class AuthInterceptorService implements HttpInterceptor{

    intercept(req,next){
        //clone and modify the request before sending it.
        var authRequest = req.clone({
            headers: req.headers.set("Authorization",'token '+localStorage.getItem(environment.tokenKey)) //send token with request headers
        })
        return next.handle(authRequest)
    }
}