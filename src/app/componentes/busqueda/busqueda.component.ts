import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculas = [];
  pelicula:Pelicula;

  constructor(private miHttp:MiHttpService) { 
    this.pelicula = new Pelicula();
  }

  peliculaSeleccionada(pelicula)
  {
    this.pelicula = pelicula;
  }

  modificar(pelicula)
  {

  }

  eliminar(pelicula)
  {
    
  }

  ngOnInit(): void {
    this.miHttp.traerPeliculas().subscribe((peliculas:any) => {
      this.listadoPeliculas = peliculas;
    });
  }

}
