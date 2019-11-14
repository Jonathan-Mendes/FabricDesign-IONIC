import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from   '../services/auth.service';
import { Desenho } from '../model/desenho';
import { User } from '../model/user';
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
    public auth: AuthService
  ) { }
 
  ngOnInit() {
    let b: any;
    this.user = new User; 
    this.Uid = this.auth.getCurrent().uid;
    let snapshot = this.firebase.getName(this.Uid);
    Promise.resolve(snapshot).then(function (value) {
       this.admin = value.admin;
    });
    console.log(this.admin);
  }

  newDesenho(){ 
    this.router.navigate(['newdesenho']);
  }

  search(cat){
    this.query =  this.firebase.search(cat);
    console.log(this.query);
    console.log(this.admin);
  }
}