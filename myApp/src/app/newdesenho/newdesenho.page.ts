import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Desenho } from '../desenho'; 
import { Router, ActivatedRoute } from '@angular/router';
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

  public id: string;
  public snapshotChangesSubscription: any;

  constructor(public firebase: FirebaseService, public rota: Router, public router: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    if(this.id){
      this.getTask(this.id);
    }
  }

  save() {
    if(this.id){
      this.verificaDesenho(this.desenho);
      this.firebase.updateTask(this.id, this.desenho);
      location.reload();
    } else{
      this.firebase.createTask(this.desenho);
    }
    this.rota.navigate(['list']);
  }

  cancelar(){
    this.rota.navigate(['home']);
  }

  verificaDesenho(desenho){
    if(!desenho[0].nomeTecido){desenho[0].nomeTecido = '';}
    if(!desenho[0].desenho){desenho[0].desenho = '';}
    if(!desenho[0].tipoBatida){desenho[0].tipoBatida = '';}
    if(!desenho[0].batidaUnica){desenho[0].batidaUnica = '';}
    if(!desenho[0].batidaZ1){desenho[0].batidaZ1 = '';}
    if(!desenho[0].batidaZ2){desenho[0].batidaZ2 = '';}
    if(!desenho[0].batidaZ3){desenho[0].batidaZ3 = '';}
    if(!desenho[0].tipoPre){desenho[0].tipoPre = '';}
    if(!desenho[0].preCorUnica){desenho[0].preCorUnica = '';}
    if(!desenho[0].preCorMult1){desenho[0].preCorMult1 = '';}
    if(!desenho[0].preCorMult2){desenho[0].preCorMult2 = '';}
    if(!desenho[0].preCorMult3){desenho[0].preCorMult3 = '';}
    if(!desenho[0].preCorMult4){desenho[0].preCorMult4 = '';}
    if(!desenho[0].doD){desenho[0].doD = '';}
    if(!desenho[0].tear){desenho[0].tear = '';}
  }

  getTask(taskId) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.firebase.afs.doc<any>('desenhos/' + taskId).valueChanges()
        .subscribe(snapshots => {
          this.desenho[0].nomeTecido = snapshots.tecido;
          this.desenho[0].desenho = snapshots.desenho;
          this.desenho[0].tipoBatida = snapshots.batida;
          this.desenho[0].batidaUnica = snapshots.batidaUnica;
          this.desenho[0].batidaZ1 = snapshots.batidaZ1;
          this.desenho[0].batidaZ2 = snapshots.batidaZ2;
          this.desenho[0].batidaZ3 = snapshots.batidaZ3;
          this.desenho[0].tipoPre = snapshots.tipoPre;
          this.desenho[0].preCorUnica = snapshots.preCorUnica;
          this.desenho[0].preCorMult1 = snapshots.preCorMult1;
          this.desenho[0].preCorMult2 = snapshots.preCorMult2;
          this.desenho[0].preCorMult3 = snapshots.preCorMult3;
          this.desenho[0].preCorMult4 = snapshots.preCorMult4;
          this.desenho[0].doD = snapshots.do;
          this.desenho[0].tear = snapshots.tear;
          resolve(this.desenho);
        }, err => {
          reject(err)
        })
    })
  }
}
