import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculas = [];

  constructor(private miHttp:MiHttpService) { }

  ngOnInit(): void {
    this.miHttp.traerPeliculas().subscribe((peliculas:any) => {
      this.listadoPeliculas = peliculas;
    });
  }

}
