import { OnInit, Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Quote } from '../interfaces/quote';
import { User } from '../interfaces/user';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export class QuoteApiService implements OnInit{
    quotes = []
    constructor(private http:HttpClient){
    }
    ngOnInit(){
    }
    getAllQuotes()
    {
        this.http.get<Quote[]>("http://localhost:8000/getAllQuotes").subscribe((results)=>{
            this.quotes = results;
        })
    }
    saveQuote(newQuote){
        this.quotes.push(<Quote>newQuote)
        return this.http.post("http://localhost:8000/insertQuote",<Quote>newQuote).catch(this.errorHandler)
    }
    deleteQuote(id)
    {
          //remove the quote from the list
      for(var i=0; i<this.quotes.length; i++)
      {
        if(this.quotes[i].id==id)
        {
          this.quotes.splice(i,1)
        }
      }
        const url ="http://localhost:8000/deleteQuote/"+id 
       return  this.http.delete(url).catch(this.errorHandler).subscribe(()=>{

       },(error)=>{
           console.log(error)
       })
    }
    updateQuote(updatedQuote)
    {
        return this.http.post("http://localhost:8000/updateQuote",<Quote>updatedQuote).catch(this.errorHandler)
    }
    private errorHandler(error: HttpErrorResponse)
    {
        return new ErrorObservable("An error occured, please try again")
    }
}