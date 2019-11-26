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
  public allDesenhos: Desenho[] = [];;
  public admin: boolean;
  public Uid: string;
  public user: User;
  public snapshotChangesSubscription: any;

  constructor(
    public router: Router,
    public firebase: FirebaseService,
    public navCtrl: NavController,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.desenhos = this.firebase.getTasks();
    this.allDesenhos = this.desenhos;
    this.user = new User;
    // this.Uid = this.auth.getCurrent().uid;
    // this.getName();
  }

  newDesenho() {
    this.router.navigate(['newdesenho']);
  }

  // initializeItems(): void {
  //   this.desenhos = this.loadedGoalList;
  // }

  filterList(evt) {
    console.log(evt.target.value)
      const val = evt.target.value;
      if (val && val.trim() != '') {
        this.desenhos = this.desenhos.filter((veiculo) => {
          return (veiculo.nomeTecido.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else {
        this.desenhos = this.allDesenhos;
      }
    }
}