import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Camera } from '@ionic-native/camera/ngx';

export const firebaseConfig = {
    apiKey: "AIzaSyA0Mln56EYkCtZ9ZKQRc94oe9lGwHTvfcM",
    authDomain: "fabric-design-49e0a.firebaseapp.com",
    databaseURL: "https://fabric-design-49e0a.firebaseio.com",
    projectId: "fabric-design-49e0a",
    storageBucket: "fabric-design-49e0a.appspot.com",
    messagingSenderId: "902713470456",
    appId: "1:902713470456:web:51da5ab1c7280687b9ba0d"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
