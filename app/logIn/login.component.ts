import { Component } from '@angular/core';

import { user } from '../NubaUserAccount/user';
import { UserService } from './user.service';

import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LogIn {

  user: user = {};

  constructor(private UserService: UserService, private Router:Router) {
      
      this.user = this.UserService.getUser();

      if (this.user.uid) {
        this.redirectToHome();
      }

      this.UserService.data.subscribe((data: any) => {
          
          this.user = data;

          if (data.uid) {
            this.redirectToHome();
          }

       });
  }

  redirectToHome(){
    this.Router.navigate(["/"]);
  }

  ngOnInit(){
    
  }

  login() {
	  this.UserService.login();
	}
	 
	logout() {
    this.UserService.logout();
	}

}