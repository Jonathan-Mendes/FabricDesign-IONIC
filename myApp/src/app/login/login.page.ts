import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
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

  constructor(public router: Router, public firebase: FirebaseService, public auth: AuthService, public alertController: AlertController) {
  }
  
  ngOnInit() {
    this.auth.doLogout();
  }

  sigIn() {
    this.auth.doLogin(this.user)
    if (this.auth.getCurrent()) {
      this.router.navigate(['home']);
    } else {
      this.presentAlertConfirm();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Usuário ou senha incorreta!',
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
}