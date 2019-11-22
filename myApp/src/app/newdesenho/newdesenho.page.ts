import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Desenho } from './../model/desenho';
@Component({
  selector: 'app-newdesenho',
  templateUrl: './newdesenho.page.html',
  styleUrls: ['./newdesenho.page.scss'],
})

export class NewdesenhoPage implements OnInit {

  // public desenho = [{
  //   nomeTecido: '',
  //   desenho: '',
  //   tipoBatida: '',
  //   batidaUnica: '',
  //   batidaZ1: '',
  //   batidaZ2: '',
  //   batidaZ3: '',
  //   tipoPre: '',
  //   preCorUnica: '',
  //   preCorMult1: '',
  //   preCorMult2: '',
  //   preCorMult3: '',
  //   preCorMult4: '',
  //   doD: '',
  //   pre: '',
  //   tear: '',
  //   categoria: ''
  // }]

  public id: string;
  public snapshotChangesSubscription: any;
  public newDesenho: Desenho;

  constructor(
    public firebase: FirebaseService,
    public rota: Router,
    public router: ActivatedRoute,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.newDesenho = new Desenho();
    this.id = this.router.snapshot.paramMap.get('id');
    if (this.id) {
      // this.getTask(this.id);
      this.newDesenho = this.firebase.getTask(this.id);
    }
  }

  save() {
    if (this.verificaDesenho(this.newDesenho)) {
      if (this.id) {
        this.firebase.updateTask(this.id, this.newDesenho);
      } else {
        this.firebase.createTask(this.newDesenho);
      }
      this.rota.navigate(['list']);
    } else {
      this.presentAlert();
    }
  }

  cancelar() {
    this.rota.navigate(['home']);
  }

  verificaDesenho(desenho) {
    let ver = true;

    if (!this.newDesenho.nomeTecido || this.newDesenho.nomeTecido == '') { ver = false }
    if (!this.newDesenho.desenho || this.newDesenho.desenho == '') { ver = false }
    if (!this.newDesenho.tipoBatida || this.newDesenho.tipoBatida == '') { ver = false }
    if ((this.newDesenho.tipoBatida == 'unica') && (!this.newDesenho.batidaUnica || this.newDesenho.batidaUnica == '')) { ver = false } else if(!this.newDesenho.batidaUnica) {this.newDesenho.batidaUnica = ''}
    if ((this.newDesenho.tipoBatida == 'zona') && (!this.newDesenho.batidaZ1 || this.newDesenho.batidaZ1 == '')) { ver = false } else if(!this.newDesenho.batidaZ1) {this.newDesenho.batidaZ1 = ''}
    if ((this.newDesenho.tipoBatida == 'zona') && (!this.newDesenho.batidaZ2 || this.newDesenho.batidaZ2 == '')) { ver = false } else if(!this.newDesenho.batidaZ2) {this.newDesenho.batidaZ2 = ''}
    if ((this.newDesenho.tipoBatida == 'zona') && (!this.newDesenho.batidaZ3 || this.newDesenho.batidaZ3 == '')) { ver = false } else if(!this.newDesenho.batidaZ3) {this.newDesenho.batidaZ3 = ''}
    if (!this.newDesenho.tipoPre || this.newDesenho.tipoPre == '') { ver = false }
    if ((this.newDesenho.tipoPre == 'unica') && (!this.newDesenho.preCorUnica || this.newDesenho.preCorUnica == '')) { ver = false } else if(!this.newDesenho.preCorUnica) {this.newDesenho.preCorUnica = ''}
    if ((this.newDesenho.tipoPre == 'multiplas') && (!this.newDesenho.preCorMult1 || this.newDesenho.preCorMult1 == '')) { ver = false } else if(!this.newDesenho.preCorMult1) {this.newDesenho.preCorMult1 = ''}
    if ((this.newDesenho.tipoPre == 'multiplas') && (!this.newDesenho.preCorMult2 || this.newDesenho.preCorMult2 == '')) { ver = false } else if(!this.newDesenho.preCorMult2) {this.newDesenho.preCorMult2 = ''}
    if ((this.newDesenho.tipoPre == 'multiplas') && (!this.newDesenho.preCorMult3 || this.newDesenho.preCorMult3 == '')) { ver = false } else if(!this.newDesenho.preCorMult3) {this.newDesenho.preCorMult3 = ''}
    if ((this.newDesenho.tipoPre == 'multiplas') && (!this.newDesenho.preCorMult4 || this.newDesenho.preCorMult4 == '')) { ver = false } else if(!this.newDesenho.preCorMult4) {this.newDesenho.preCorMult4 = ''}
    if (!this.newDesenho.doD || this.newDesenho.doD == '') { ver = false }
    if (!this.newDesenho.tear || this.newDesenho.tear == '') { ver = false }
    if (!this.newDesenho.categoria || this.newDesenho.categoria == '') { ver = false }

    return ver;
  }

  // getTask(taskId) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.snapshotChangesSubscription = this.firebase.afs.doc<any>('desenhos/' + taskId).valueChanges()
  //       .subscribe(snapshots => {
  //         this.newDesenho.nomeTecido = snapshots.tecido;
  //         this.newDesenho.desenho = snapshots.desenho;
  //         this.newDesenho.tipoBatida = snapshots.batida;
  //         this.newDesenho.batidaUnica = snapshots.batidaUnica;
  //         this.newDesenho.batidaZ1 = snapshots.batidaZ1;
  //         this.newDesenho.batidaZ2 = snapshots.batidaZ2;
  //         this.newDesenho.batidaZ3 = snapshots.batidaZ3;
  //         this.newDesenho.tipoPre = snapshots.tipoPre;
  //         this.newDesenho.preCorUnica = snapshots.preCorUnica;
  //         this.newDesenho.preCorMult1 = snapshots.preCorMult1;
  //         this.newDesenho.preCorMult2 = snapshots.preCorMult2;
  //         this.newDesenho.preCorMult3 = snapshots.preCorMult3;
  //         this.newDesenho.preCorMult4 = snapshots.preCorMult4;
  //         this.newDesenho.doD = snapshots.do;
  //         this.newDesenho.tear = snapshots.tear;
  //         this.newDesenho.categoria = snapshots.categoria;
  //         resolve(this.desenho);
  //       }, err => {
  //         reject(err)
  //       })
  //   })
  // }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      // subHeader: 'Subtitle',
      message: 'Preencha os campos corretamente!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
