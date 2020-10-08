import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ocultar:boolean = true;
  
  constructor(private miHttp:MiHttpService,private router:Router) { 
    this.pelicula = new Pelicula();
  }

  peliculaSeleccionada(pelicula)
  {
    this.pelicula = pelicula;
    this.ocultar = false;
  }

  eliminar(pelicula)
  {
    this.miHttp.eliminarPelicula(pelicula.id.toString());
    this.miHttp.traerPeliculas().subscribe((peliculas:any) => {
      this.listadoPeliculas = peliculas;
    });
  }

  modificar(id)
  {
    this.router.navigate(['/peliculas/modificar/'+id]);
  }

  ngOnInit(): void {
    this.miHttp.traerPeliculas().subscribe((peliculas:any) => {
      this.listadoPeliculas = peliculas;
    });
  }

}
