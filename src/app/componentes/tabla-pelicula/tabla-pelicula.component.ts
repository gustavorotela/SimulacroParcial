import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas:any;
  @Output() emitirPelicula: EventEmitter<any> = new EventEmitter();

  constructor() { }

  mostrarDetalle(pelicula:Pelicula)
  {
    console.log(pelicula);
    this.emitirPelicula.emit(pelicula);
  }

  ngOnInit(): void {
  }

}
