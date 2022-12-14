import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import {ToastrService} from 'ngx-toastr';
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
  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$=this.accountService.currentUser$;
  }
  
  login(){
    //console.log()

    this.accountService.login(this.model).subscribe(response =>{
  this.router.navigateByUrl('/members');
      console.log(response);
  //this.LoggedIn=true;
    },error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }


  logout(){
    //console.log()
    this.accountService.logout();
    this.router.navigateByUrl('/');
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
