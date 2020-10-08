import { Component, OnInit } from '@angular/core';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  listadoActores = [];

  constructor(private miHttp:MiHttpService) { }

  mostrarDetalle(actor)
  {
    
  }

  ngOnInit(): void {
    this.miHttp.traerActores().subscribe( actores => {
      this.listadoActores = actores;
    })
  }

}
