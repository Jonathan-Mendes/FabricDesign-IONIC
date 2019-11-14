import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Desenho } from '../model/desenho';
import { NavController } from '@ionic/angular';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public desenhos: Desenho[] = []; 
  public admin: boolean;
  public Uid: string;
  public user: User;
  public snapshotChangesSubscription: any;

  constructor(
    public router: Router, 
    public firebase: FirebaseService,
    public navCtrl: NavController,
    public auth: AuthService
    ) {}

  ngOnInit() {
    this.desenhos = this.firebase.getTasks();
    console.log(this.desenhos);
    this.user = new User; 
    // this.Uid = this.auth.getCurrent().uid;
    this.getName();
  }

  newDesenho(){ 
    this.router.navigate(['newdesenho']);  
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
