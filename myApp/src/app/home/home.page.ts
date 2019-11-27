import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from   '../services/auth.service';
import { Desenho } from '../model/desenho';
import { User } from '../model/user';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 
  public query: Desenho[] = []; 
  public admin: boolean;
  public Uid: string;
  public user: User;
  public snapshotChangesSubscription: any;

  constructor(
    public navCtrl: NavController,
    public router: Router, 
    public firebase: FirebaseService,
    public auth: AuthService,
    public app: AppComponent
  ) {}
 
  ngOnInit() {
    this.admin = this.app.getAdmin();
    console.log(this.admin)
  }

  newDesenho(){ 
    this.router.navigate(['newdesenho']);
  }

  search(cat){
    this.router.navigate(['search/' + cat]);
  }
}