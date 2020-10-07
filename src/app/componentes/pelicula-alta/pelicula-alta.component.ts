import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  nuevaPelicula:Pelicula;
  id:number;
  listaActores = [];
  actoresSeleccionados:string[] = [];

  constructor(private miHttp:MiHttpService) { 
    this.nuevaPelicula = new Pelicula();
  }

  guardarPelicula()
  {
    this.nuevaPelicula.actores = this.actoresSeleccionados
    this.nuevaPelicula.id = this.id;
    this.miHttp.cargarPelicula(this.nuevaPelicula,this.id.toString());
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
    this.miHttp.ultimoIdPelicula().subscribe( data => {
      if(data == "")
        this.id = 1
      else
      {
        this.id = data[0].id;
        this.id++;
      }
    });
    this.miHttp.traerActores().subscribe( data => {
      this.listaActores = data;
    });
  }
}
