import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  respuestasAFL : AngularFireList<any>;
  respuestasObservable : Observable<any>;

  constructor(public afAuth : AngularFireAuth, public afDB : AngularFireDatabase) { }

  traerPeliculas()
  {
    this.respuestasAFL = this.afDB.list("/Peliculas");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  cargarPelicula(pelicula:Pelicula)
  {
    const listadoPeliculas = this.afDB.list("/Peliculas/");
    listadoPeliculas.push(pelicula);
  }

  traerActores()
  {
    this.respuestasAFL = this.afDB.list("/Actores");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  cargarActor(actor:Actor)
  {
    const resultadosAgilidad = this.afDB.list("/Actores/");
    resultadosAgilidad.push(actor);
  }
}
