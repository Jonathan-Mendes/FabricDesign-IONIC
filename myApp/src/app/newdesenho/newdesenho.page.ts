import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Desenho } from '../desenho'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-newdesenho',
  templateUrl: './newdesenho.page.html',
  styleUrls: ['./newdesenho.page.scss'],
})

export class NewdesenhoPage implements OnInit {

  public desenho = [{
    nomeTecido: '',
    desenho: '',
    tipoBatida: '',
    batidaUnica: '',
    batidaZ1: '',
    batidaZ2: '',
    batidaZ3: '',
    tipoPre: '',
    preCorUnica: '',
    preCorMult1: '',
    preCorMult2: '',
    preCorMult3: '',
    preCorMult4: '',
    doD: '',
    pre: '',
    tear: '',
    categoria: ''
  }]

  // private newDesenho: Desenho;

  constructor(public firebase: FirebaseService, public router: Router) {
  }

  ngOnInit() {
    // this.newDesenho =  new Desenho();
  }

  save() {
    // if(this.desenho.tipoBatida !== ''){
      this.firebase.createTask(this.desenho);
      this.router.navigate(['list']);
    // }
  }

  cancelar(){
    this.router.navigate(['home']);
  }
}
