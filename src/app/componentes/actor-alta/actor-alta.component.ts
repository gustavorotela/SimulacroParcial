import { Component, OnInit } from '@angular/core';
import { Actor } from '../../clases/actor';
import { MiHttpService } from '../../servicios/mi-http.service';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  nuevoActor:Actor;
  id:number;

  constructor(private miHttp:MiHttpService) { 
    this.nuevoActor = new Actor();
  }

  guardarActor()
  {
    this.nuevoActor.id = this.id;
    this.miHttp.cargarActor(this.nuevoActor,this.id.toString());
    window.location.reload();
  }

  ngOnInit(): void {
    this.miHttp.ultimoIdActor().subscribe( data => {
      if(data == "")
        this.id = 1
      else
      {
        this.id = data[0].id;
        this.id++;
      }
    });
  }

}
