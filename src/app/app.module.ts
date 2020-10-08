import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { VisualesModule } from './modulos/visuales/visuales.module';
import { PeliculaModificarComponent } from './componentes/pelicula-modificar/pelicula-modificar.component';
import { PeliculaEliminarComponent } from './componentes/pelicula-eliminar/pelicula-eliminar.component';
import { MenuComponent } from './componentes/menu/menu.component';

var firebaseConfig = {
  apiKey: "AIzaSyBwwDZtpRqLVuxTzuLnsgH-q_ZZ_pvzl6g",
  authDomain: "lista-9ea2a.firebaseapp.com",
  databaseURL: "https://lista-9ea2a.firebaseio.com",
  projectId: "lista-9ea2a",
  storageBucket: "lista-9ea2a.appspot.com",
  messagingSenderId: "577617675045",
  appId: "1:577617675045:web:bdda3ca9d8c2f8600990cc"
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
    TablaActorComponent,
    PeliculaModificarComponent,
    PeliculaEliminarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    VisualesModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
