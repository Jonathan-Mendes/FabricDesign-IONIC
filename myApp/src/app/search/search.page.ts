import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Desenho } from '../model/desenho';
import { NavController } from '@ionic/angular';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public desenhos: Desenho[] = [];
  public admin: boolean;
  // public cat: string;
  public user: User;
  public snapshotChangesSubscription: any;

  constructor(
    public rota: Router,
    public router: ActivatedRoute,
    public firebase: FirebaseService,
    public navCtrl: NavController,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.desenhos = this.firebase.getTasks();
    console.log(this.desenhos);
    let cat = this.router.snapshot.paramMap.get('cat');
    this.desenhos =  this.firebase.search(cat);
  }

  newDesenho() {
    this.rota.navigate(['newdesenho']);
  }
}
