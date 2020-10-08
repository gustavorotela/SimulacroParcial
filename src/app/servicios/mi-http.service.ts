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
  id:number;

  constructor(public afAuth : AngularFireAuth, public afDB : AngularFireDatabase) { }

  traerPeliculas()
  {
    this.respuestasAFL = this.afDB.list("/Peliculas");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  traerUnaPelicula(id)
  {
    this.respuestasAFL = this.afDB.list("/Peliculas",ref => ref.child(id));
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  cargarPelicula(pelicula:Pelicula,id:string)
  {
    const listadoPeliculas = this.afDB.list("/Peliculas/");
    listadoPeliculas.set(id,pelicula);
  }

  ultimoIdPelicula()
  {
    this.respuestasAFL = this.afDB.list("/Peliculas",ref => ref.limitToLast(1));
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  modificarPelicula(id:string,pelicula)
  {
    this.respuestasAFL = this.afDB.list("/Pelicula");
    this.respuestasAFL.update(id,pelicula);
  }

  eliminarPelicula(id:string)
  {
    this.respuestasAFL = this.afDB.list("/Peliculas");
    this.respuestasAFL.remove(id)
  }

  traerActores()
  {
    this.respuestasAFL = this.afDB.list("/Actores");
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  cargarActor(actor:Actor,id:string)
  {
    const resultadosAgilidad = this.afDB.list("/Actores/");
    resultadosAgilidad.set(id,actor);
  }

  ultimoIdActor()
  {
    this.respuestasAFL = this.afDB.list("/Actores",ref => ref.limitToLast(1));
    this.respuestasObservable = this.respuestasAFL.valueChanges();
    return this.respuestasObservable;
  }

  modificarActor(id:string,actor)
  {
    this.respuestasAFL = this.afDB.list("/Actores");
    this.respuestasAFL.update(id,actor);
  }

  eliminarActor(id:string)
  {
    this.respuestasAFL = this.afDB.list("/Actores");
    this.respuestasAFL.remove(id)
  }  
}
