import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _authService : AuthService){
  
  }
  title = 'app';
  UserType = this._authService.UserType;
  open = true //side navigation- default open
  openNav() {
    document.getElementById("menuItems").style.marginLeft = "180px"
    document.getElementById("Sidenav").style.width = "200px";
    this.open = true
  }
  
  closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("menuItems").style.marginLeft = "0px"
    this.open = false
  }

}

