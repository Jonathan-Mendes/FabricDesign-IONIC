import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public snapshotChangesSubscription: any;
  public Uid: any;
  public user: User;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'ios-home'
    },
    {
      title: 'Desenhos',
      url: '/list',
      icon: 'ios-folder-open'
    },
    {
      title: 'Novo Desenho',
      url: '/newdesenho',
      icon: 'ios-create'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public firebase: FirebaseService,
    public auth: AuthService,
  ) {
    this.initializeApp();
  }

  OnInit(){
    // this.Uid = this.auth.getCurrent;
    // console.log(this.Uid)
    // this.user = new User();
    // // this.user = this.firebase.getUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
