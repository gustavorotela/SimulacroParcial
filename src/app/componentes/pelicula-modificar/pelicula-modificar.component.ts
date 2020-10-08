import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../clases/pelicula';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-pelicula-modificar',
  templateUrl: './pelicula-modificar.component.html',
  styleUrls: ['./pelicula-modificar.component.css']
})
export class PeliculaModificarComponent implements OnInit {

  pelicula:Pelicula;
  id:number;
  listaActores = [];
  actoresSeleccionados:string[] = [];

  constructor(private miHttp:MiHttpService, private activatedRoute: ActivatedRoute) { 
    this.pelicula = new Pelicula();
  }

  guardarPelicula()
  {
    this.pelicula.actores = this.actoresSeleccionados
    this.pelicula.id = this.id;
    this.miHttp.modificarPelicula(this.pelicula.id.toString(),this.pelicula)
    window.location.reload();
  }

  checkActor(nombre, apellido)
  {
    let actor:string;

    actor = nombre + " " + apellido;
    if(this.actoresSeleccionados.indexOf(actor) < 0)
    {
      this.actoresSeleccionados.push(actor);
    }
    else
    {
      const index: number = this.actoresSeleccionados.indexOf(actor);
      this.actoresSeleccionados.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this.miHttp.traerUnaPelicula(id.toString()).subscribe( pelicula => {
        console.log(pelicula);
        this.pelicula.fechaEstreno = pelicula[0];
        this.pelicula.id = pelicula[1];
        this.pelicula.nombre = pelicula[2];
        this.pelicula.publico = pelicula[3];
        this.pelicula.tipo = pelicula[4]
        this.pelicula.actores = pelicula[5];
      });
     });
  }

}
