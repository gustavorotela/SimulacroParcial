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

  constructor(private miHttp:MiHttpService) { 
    this.nuevaPelicula = new Pelicula();
  }

  guardarPelicula()
  {
    this.nuevaPelicula.id = this.id;
    this.miHttp.cargarPelicula(this.nuevaPelicula,this.id.toString());
    window.location.reload();
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
