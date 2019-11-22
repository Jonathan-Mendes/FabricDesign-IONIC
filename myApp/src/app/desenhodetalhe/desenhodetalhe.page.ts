import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desenho } from '../model/desenho'
import { FirebaseService } from '../services/firebase.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-desenhodetalhe',
  templateUrl: './desenhodetalhe.page.html',
  styleUrls: ['./desenhodetalhe.page.scss'],
})
export class DesenhodetalhePage implements OnInit {

  public id: string;
  public desenho: Desenho;
  public desenhos: Desenho[] = [];
  public snapshotChangesSubscription: any;

  constructor(
      public rota: Router,
      public router: ActivatedRoute, 
      public firebase: FirebaseService,
      public alertController: AlertController
  ) { }

  ngOnInit() {
    this.desenho = new Desenho;
    this.id = this.router.snapshot.paramMap.get('id');
    this.desenho = (this.firebase.getTask(this.id));
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Excluir',
      message: 'Deseja excluir esse desenho?',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            this.delete();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  delete(){
    try{
      this.firebase.deleteTask(this.id);
      this.rota.navigate(['list']);
    } catch(e){
      console.log('Não foi possivel excluir');
    }
  }

  edit(){
      this.rota.navigate(['/newdesenho/' + this.id ]);
  }
}
