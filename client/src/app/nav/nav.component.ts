import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any ={}
//LoggedIn: boolean;
//currentUser$: Observable<User>;
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$=this.accountService.currentUser$;
  }
  
  login(){
    //console.log()
    this.accountService.login(this.model).subscribe(response =>{
  console.log(response);
  //this.LoggedIn=true;
    },error => {
      console.log(error);
    })
  }


  logout(){
    //console.log()
    this.accountService.logout();
   // this.LoggedIn=false;
   
  }
  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user =>{
      //this.LoggedIn=!!user;
    },error => {
      console.log(error);
    })
  }

}
