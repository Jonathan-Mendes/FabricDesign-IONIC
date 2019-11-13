import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Desenho } from './../desenho';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 
  public query: Desenho[] = []; 

  constructor(public navCtrl: NavController, public router: Router, public firebase: FirebaseService) { }
 
  ngOnInit() {
    
  }
 
  newDesenho(){ 
    this.router.navigate(['newdesenho']);
  }

  search(cat){
    this.query =  this.firebase.search(cat);
    console.log(this.query);
  }
 
}