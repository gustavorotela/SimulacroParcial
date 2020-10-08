import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  listadoActores = [];
  actorSeleccionado:Actor;

  constructor(private miHttp:MiHttpService) { 
  }

  mostrarDetalle(actor)
  {
    this.actorSeleccionado = actor;
    console.log(this.actorSeleccionado);
  }

  ngOnInit(): void {
    this.miHttp.traerActores().subscribe( actores => {
      this.listadoActores = actores;
    })
  }

}
