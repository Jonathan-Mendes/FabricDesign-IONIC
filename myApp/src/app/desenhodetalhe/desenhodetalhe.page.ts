import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Desenho } from '../desenho'
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-desenhodetalhe',
  templateUrl: './desenhodetalhe.page.html',
  styleUrls: ['./desenhodetalhe.page.scss'],
})
export class DesenhodetalhePage implements OnInit {

  public id: string;
  public desenho: Desenho;
  public snapshotChangesSubscription: any;

  constructor(public router: ActivatedRoute, public firebase: FirebaseService) { }

  ngOnInit() {
    this.desenho = new Desenho;
    this.id = this.router.snapshot.paramMap.get('id');
    this.getTask(this.id);
    console.log(this.desenho);
  }

  getTask(taskId) {
    return new Promise<Desenho>((resolve, reject) => {
      this.snapshotChangesSubscription = this.firebase.afs.doc<any>('desenhos/' + taskId).valueChanges()
        .subscribe(snapshots => {
          this.desenho.nomeTecido = snapshots.tecido;
          this.desenho.desenho = snapshots.desenho;
          this.desenho.tipoBatida = snapshots.batida;
          this.desenho.batidaUnica = snapshots.batidaUnica;
          this.desenho.batidaZ1 = snapshots.batidaZ1;
          this.desenho.batidaZ2 = snapshots.batidaZ2;
          this.desenho.batidaZ3 = snapshots.batidaZ3;
          this.desenho.tipoPre = snapshots.tipoPre;
          this.desenho.preCorUnica = snapshots.preCorUnica;
          this.desenho.preCorMult1 = snapshots.preCorMult1;
          this.desenho.preCorMult2 = snapshots.preCorMult2;
          this.desenho.preCorMult3 = snapshots.preCorMult3;
          this.desenho.preCorMult4 = snapshots.preCorMult4;
          this.desenho.doD = snapshots.do;
          this.desenho.tear = snapshots.tear;
          resolve(this.desenho);
        }, err => {
          reject(err)
        })
    })
  }

}
