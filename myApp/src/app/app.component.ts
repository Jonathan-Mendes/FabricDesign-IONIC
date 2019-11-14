import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './model/user';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public snapshotChangesSubscription: any;
  public Uid: any;

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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
