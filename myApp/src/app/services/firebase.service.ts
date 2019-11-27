import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Desenho } from '../model/desenho';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  async getUser(Uid): Promise<User> {
    let user = new User();
    await firebase.firestore().collection('usuarios').doc(Uid).get().then(function(doc){
      user.nome = doc.data().nome;
      user.foto = doc.data().foto;
      user.admin = doc.data().admin;
  });
      return user;
  }

  searchInput(query): Array<Desenho> {
    let desenhos: Desenho[] = [];
    this.afs.firestore.collection('desenhos').where("tecido", "==", query)
    .get().then(function (querySnapshot) {
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
        desenho.tipoPre = doc.data().tipoPre,
        desenho.preCorUnica = doc.data().preCorUnica,
        desenho.preCorMult1 = doc.data().preCorMult1;
        desenho.preCorMult2 = doc.data().preCorMult2;
        desenho.preCorMult3 = doc.data().preCorMult3;
        desenho.preCorMult4 = doc.data().preCorMult4;
        desenho.tear = doc.data().tear;
        desenho.categoria = doc.data().categoria;
        desenhos.push(desenho);
      });
    });
    return desenhos;
  }

  search(cat): Array<Desenho> {
    let desenhos: Desenho[] = [];
    this.afs.firestore.collection('desenhos').where("categoria", "==", cat)
    .get().then(function (querySnapshot) {
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
        desenho.tipoPre = doc.data().tipoPre,
        desenho.preCorUnica = doc.data().preCorUnica,
        desenho.preCorMult1 = doc.data().preCorMult1;
        desenho.preCorMult2 = doc.data().preCorMult2;
        desenho.preCorMult3 = doc.data().preCorMult3;
        desenho.preCorMult4 = doc.data().preCorMult4;
        desenho.tear = doc.data().tear;
        desenho.categoria = doc.data().categoria;
        desenhos.push(desenho);
      });
    });
    return desenhos;
  }

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
        desenho.tipoPre = doc.data().tipoPre,
        desenho.preCorUnica = doc.data().preCorUnica,
        desenho.preCorMult1 = doc.data().preCorMult1,
        desenho.preCorMult2 = doc.data().preCorMult2,
        desenho.preCorMult3 = doc.data().preCorMult3,
        desenho.preCorMult4 = doc.data().preCorMult4,
        desenho.tear = doc.data().tear;
        desenho.categoria = doc.data().categoria;
        desenhos.push(desenho);
      });
    });
    return desenhos;
  }

  getTask(taskId){
    let desenho = new Desenho();
      firebase.firestore().collection('desenhos').doc(taskId).get().then(function(doc){
        if(doc.exists){
          desenho.nomeTecido = doc.data().tecido;
          desenho.desenho = doc.data().desenho;
          desenho.tipoBatida = doc.data().batida;
          desenho.batidaUnica = doc.data().batidaUnica;
          desenho.batidaZ1 = doc.data().batidaZ1;
          desenho.batidaZ2 = doc.data().batidaZ2;
          desenho.batidaZ3 = doc.data().batidaZ3;
          desenho.doD = doc.data().do;
          desenho.tipoPre = doc.data().tipoPre;
          desenho.preCorUnica = doc.data().preCorUnica;
          desenho.preCorMult1 = doc.data().preCorMult1;
          desenho.preCorMult2 = doc.data().preCorMult2;
          desenho.preCorMult3 = doc.data().preCorMult3;
          desenho.preCorMult4 = doc.data().preCorMult4;
          desenho.tear = doc.data().tear;
          desenho.categoria = doc.data().categoria;
        }
      })
      return desenho;
  }

  unsubscribeOnLogOut() {
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  updateTask(taskId, newDesenho) {
    console.log(newDesenho)
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('desenhos').doc(taskId).set({
        tecido: newDesenho.nomeTecido,
        desenho: newDesenho.desenho,
        batida: newDesenho.tipoBatida,
        batidaUnica: newDesenho.batidaUnica,
        batidaZ1: newDesenho.batidaZ1,
        batidaZ2: newDesenho.batidaZ3,
        batidaZ3: newDesenho.batidaZ3,
        tipoPre: newDesenho.tipoPre,
        preCorUnica: newDesenho.preCorUnica,
        preCorMult1: newDesenho.preCorMult1,
        preCorMult2: newDesenho.preCorMult2,
        preCorMult3: newDesenho.preCorMult3,
        preCorMult4: newDesenho.preCorMult4,
        do: newDesenho.doD,
        tear: newDesenho.tear,
        categoria: newDesenho.categoria
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  deleteTask(taskKey) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('desenhos').doc(taskKey).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  createTask(newDesenho) {
    console.log(newDesenho)
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('desenhos').add({
        tecido: newDesenho.nomeTecido,
        desenho: newDesenho.desenho,
        batida: newDesenho.tipoBatida,
        batidaUnica: newDesenho.batidaUnica,
        batidaZ1: newDesenho.batidaZ1,
        batidaZ2: newDesenho.batidaZ3,
        batidaZ3: newDesenho.batidaZ3,
        tipoPre: newDesenho.tipoPre,
        preCorUnica: newDesenho.preCorUnica,
        preCorMult1: newDesenho.preCorMult1,
        preCorMult2: newDesenho.preCorMult2,
        preCorMult3: newDesenho.preCorMult3,
        preCorMult4: newDesenho.preCorMult4,
        do: newDesenho.doD,
        tear: newDesenho.tear,
        categoria: newDesenho.categoria
      }).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  // encodeImageUri(imageUri, callback) {
  //   var c = document.createElement('canvas');
  //   var ctx = c.getContext("2d");
  //   var img = new Image();
  //   img.onload = function () {
  //     var aux: any = this;
  //     c.width = aux.width;
  //     c.height = aux.height;
  //     ctx.drawImage(img, 0, 0);
  //     var dataURL = c.toDataURL("image/jpeg");
  //     callback(dataURL);
  //   };
  //   img.src = imageUri;
  // };

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  }

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('imageName');
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
        }, err => {
          reject(err);
        })
      })
    })
  }

  // uploadImage(imageURI, randomId) {
  //   return new Promise<any>((resolve, reject) => {
  //     let storageRef = firebase.storage().ref();
  //     let imageRef = storageRef.child('image').child(randomId);
  //     this.encodeImageUri(imageURI, function (image64) {
  //       imageRef.putString(image64, 'data_url')
  //         .then(snapshot => {
  //           snapshot.ref.getDownloadURL()
  //             .then(res => resolve(res))
  //         }, err => {
  //           reject(err);
  //         })
  //     })
  //   })
  // }
}