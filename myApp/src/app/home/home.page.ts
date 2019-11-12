import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 
 
  constructor(public navCtrl: NavController, public router: Router) { }
 
  ngOnInit() {
    
  }
 
  newDesenho(){ 
    this.router.navigate(['newdesenho']);
  }
 
}