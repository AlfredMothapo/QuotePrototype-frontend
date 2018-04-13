import { OnInit, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Quote } from '../interfaces/quote';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

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
        this.http.post("http://localhost:8000/insertQuote",<Quote>newQuote).subscribe((results)=>
        {
            //do nothing
        },(error)=>{
            console.log(error)
        })
    }
    deleteQuote(id)
    {
        const url ="http://localhost:8000/deleteQuote/"+id 
        this.http.delete(url).subscribe((results)=>{
            //remove the quote from the list
            for(var i=0; i<this.quotes.length; i++)
            {
              if(this.quotes[i].id==id)
              {
                this.quotes.splice(i,1)
              }
            }
        },(error)=>{
            console.log(error)
        })
       
    }
    updateQuote(updatedQuote)
    {
        this.http.post("http://localhost:8000/updateQuote",<Quote>updatedQuote).subscribe((results)=>
        {
            //do nothing on success
        },(error)=>{
            console.log(error)
        })
    }
}