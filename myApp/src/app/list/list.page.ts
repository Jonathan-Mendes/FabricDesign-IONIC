import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Desenho } from '../desenho';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public desenhos: Desenho[] = []; 

  constructor(public router: Router, public firebase: FirebaseService, public navCtrl: NavController) {
  }

  ngOnInit() {
    this.desenhos = this.firebase.getTasks();
  }

  newDesenho(){ 
    this.router.navigate(['newdesenho']);  
  }
}
