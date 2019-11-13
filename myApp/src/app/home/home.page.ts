import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AuthService } from   '../auth.service';
import { Desenho } from './../desenho';
import { User } from './../user';
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
    this.user = new User; 
    this.Uid = this.auth.getCurrent().uid;
    this.getName();
  }
 
  newDesenho(){ 
    this.router.navigate(['newdesenho']);
  }

  search(cat){
    this.query =  this.firebase.search(cat);
    console.log(this.query);
  }

  getName(){
      return new Promise<User>((resolve, reject) => {
            this.snapshotChangesSubscription = this.firebase.afs.doc<any>('usuarios/' + this.Uid).valueChanges()
            .subscribe(snapshots => {
              this.user.nome = snapshots.nome;
              this.user.foto = snapshots.foto;
              this.user.admin = snapshots.admin;
              resolve(this.user);
            }, err => {
              reject(err)
            })
        })
    }
}