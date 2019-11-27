import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';
import { User } from './model/user';
import { Router } from '@angular/router';

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
    },
    {
      title: 'Configurações',
      url: '/config',
      icon: 'ios-settings' 
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public firebase: FirebaseService,
    public auth: AuthService,
    public menu: MenuController,
    public router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async setUser(){
    this.user = new User();
    this.user = await this.firebase.getUser(this.auth.getCurrent().uid);
    }

  getAdmin(){
    console.log(this.user.admin)
    if(this.user.admin){
      return true;
    }else{
      return false;
    }
  }  
  
  logOut(){
    this.menu.enable(false);
    this.router.navigate(['login']);
  }
}
