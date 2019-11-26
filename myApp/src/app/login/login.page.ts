import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public current: any;
  public user = {
    email: '',
    password: ''
  };

  constructor(
    public router: Router,
    public firebase: FirebaseService,
    public auth: AuthService, 
    public alertController: AlertController
    ) {}
  
  ngOnInit() {
    this.auth.doLogout();
  }

  sigIn() {
    if(this.user.email != '' && this.user.password != ''){
      this.login()
    } else{
        this.presentAlertConfirm('Preencha os campos corretamente!');
    }

    // 'Usuário ou senha incorreta!'
    // this.auth.doLogin(this.user)
    // this.current = this.auth.getCurrent();
    // if (this.current) {
    //   this.router.navigate(['home']);
    // } else {
    //   // this.presentAlertConfirm();
    // }
  }

  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  login(){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(
        res => this.router.navigate(['home']),
        err => this.presentAlertConfirm('Usuário ou senha inválida!'))
    })
   }
}