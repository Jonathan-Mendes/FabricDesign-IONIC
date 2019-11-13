import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = [{
    email: '',
    password: ''
  }];

  constructor(public router: Router, public firebase: FirebaseService, public auth: AuthService) { }

  ngOnInit() {
    this.auth.doLogout();
  }


  sigIn(){
      this.auth.doLogin(this.user)
      if(this.auth.getCurrent()){
        this.router.navigate(['home']);
      }
  }
  
}
