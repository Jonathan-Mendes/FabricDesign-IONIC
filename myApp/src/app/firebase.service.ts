import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Desenho } from './desenho';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  getTasks(): Array<Desenho> {
    let desenhos: Desenho[] = [];
    this.afs.firestore.collection("desenhos").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let desenho = new Desenho;
        desenho.id = doc.id;
        desenho.nomeTecido = doc.data().tecido;
        desenho.desenho = doc.data().desenho;
        desenho.tipoBatida = doc.data().batida;
        desenho.batidaUnica = doc.data().batidaUnica;
        desenho.batidaZ1 = doc.data().batidaZ1;
        desenho.batidaZ2 = doc.data().batidaZ2;
        desenho.batidaZ3 = doc.data().batidaZ3;
        desenho.doD = doc.data().do;
        desenho.tipoPre= doc.data().tipoPre,
        desenho.preCorUnica= doc.data().preCorUnica,
        desenho.preCorMult1= doc.data().preCorMult1,
        desenho.preCorMult2= doc.data().preCorMult2,
        desenho.preCorMult3= doc.data().preCorMult3,
        desenho.preCorMult4= doc.data().preCorMult4,
        desenho.tear = doc.data().tear;
        desenhos.push(desenho);
      });
    });
    return desenhos;
  }

  // getTask(id): Array<Desenho> {
  //   let desenhos: Desenho[] = [];
  //   this.afs.firestore.collection("desenhos").doc(id).get().then(function (doc) {
  //     if (doc.exists) {
  //       let desenho = new Desenho;
  //       desenho.id = doc.id;
  //       desenho.nomeTecido = doc.data().tecido;
  //       desenho.desenho = doc.data().desenho;
  //       desenho.tipoBatida = doc.data().batida;
  //       desenho.batidaUnica = doc.data().batidaUnica;
  //       desenho.batidaZ1 = doc.data().batidaZ1;
  //       desenho.batidaZ2 = doc.data().batidaZ2;
  //       desenho.batidaZ3 = doc.data().batidaZ3;
  //       desenho.doD = doc.data().do;
  //       desenho.pre = doc.data().pre;
  //       desenho.tear = doc.data().tear;
  //       desenhos.push(desenho);
  //     }
  //   });
  //   return desenhos;
  // }

  getTask(taskId){
    let desenho = new Desenho;
    return new Promise<Desenho>((resolve, reject) => {
          this.snapshotChangesSubscription = this.afs.doc<any>('desenhos/' + taskId).valueChanges()
          .subscribe(snapshots => {
            desenho.nomeTecido = snapshots.tecido;
            desenho.desenho = snapshots.desenho;
            desenho.tipoBatida = snapshots.batida;
            desenho.batidaUnica = snapshots.batidaUnica;
            desenho.batidaZ1 = snapshots.batidaZ1;
            desenho.batidaZ2 = snapshots.batidaZ2;
            desenho.batidaZ3 = snapshots.batidaZ3;
            desenho.doD = snapshots.do;
            desenho.tipoPre= snapshots.tipoPre,
            desenho.preCorUnica= snapshots.preCorUnica,
            desenho.preCorMult1= snapshots.preCorMult1,
            desenho.preCorMult2= snapshots.preCorMult2,
            desenho.preCorMult3= snapshots.preCorMult3,
            desenho.preCorMult4= snapshots.preCorMult4,
            desenho.tear = snapshots.tear;
            desenho.categoria = snapshots.categoria;
            resolve(desenho);
          }, err => {
            reject(err)
          })
      })
  }

  unsubscribeOnLogOut() {
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  updateTask() {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('desenhos').doc('1').set({
        teste: '33'
      })
        .then(

          res => resolve(res),
          err => reject(err)
        )
    })
  }

  deleteTask(taskKey) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  createTask(newDesenho) {
    console.log(newDesenho[0]);
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('desenhos').add({
        tecido: newDesenho[0].nomeTecido,
        desenho: newDesenho[0].desenho,
        batida: newDesenho[0].tipoBatida,
        batidaUnica: newDesenho[0].batidaUnica,
        batidaZ1: newDesenho[0].batidaZ1,
        batidaZ2: newDesenho[0].batidaZ3,
        batidaZ3: newDesenho[0].batidaZ3,
        tipoPre: newDesenho[0].tipoPre,
        preCorUnica: newDesenho[0].preCorUnica,
        preCorMult1: newDesenho[0].preCorMult1,
        preCorMult2: newDesenho[0].preCorMult2,
        preCorMult3: newDesenho[0].preCorMult3,
        preCorMult4: newDesenho[0].preCorMult4,
        do: newDesenho[0].doD,
        pre: newDesenho[0].pre,
        tear: newDesenho[0].tear
      }).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }


  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux: any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI, randomId) {
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function (image64) {
        imageRef.putString(image64, 'data_url')
          .then(snapshot => {
            snapshot.ref.getDownloadURL()
              .then(res => resolve(res))
          }, err => {
            reject(err);
          })
      })
    })
  }
}