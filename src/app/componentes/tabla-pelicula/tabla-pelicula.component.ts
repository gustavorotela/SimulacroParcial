import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas:any;

  constructor() { }

  ngOnInit(): void {
  }

}
