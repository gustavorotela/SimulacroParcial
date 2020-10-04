import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';

var firebaseConfig = {
  apiKey: "AIzaSyAN9oKSbVCQCZXpLqUgENy3Y5E8-HKW3xI",
  authDomain: "saladejuegos-39f40.firebaseapp.com",
  databaseURL: "https://saladejuegos-39f40.firebaseio.com",
  projectId: "saladejuegos-39f40",
  storageBucket: "saladejuegos-39f40.appspot.com",
  messagingSenderId: "476956640782",
  appId: "1:476956640782:web:5e980cc393f0cd11cf5e5f",
  measurementId: "G-Y2SQYV4D1J"
};

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    TablaActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
