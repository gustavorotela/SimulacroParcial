import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { MiHttpService } from '../../servicios/mi-http.service';


@Component({
  selector: 'app-actor-modificar',
  templateUrl: './actor-modificar.component.html',
  styleUrls: ['./actor-modificar.component.css']
})
export class ActorModificarComponent implements OnInit {

  actor:Actor;
  id:number;

  constructor(private miHttp:MiHttpService, private activatedRoute: ActivatedRoute) {
    this.actor = new Actor();
  }

  guardarActor()
  {
    this.actor.id = this.id;
    this.miHttp.modificarActor(this.actor.id.toString(),this.actor)
    window.location.reload();
  }

  checkPais(pais)
  {
    this.actor.nacionalidad = pais;
    console.log(pais);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.miHttp.traerUnActor(this.id.toString()).subscribe( actor => {
        console.log(actor);
        this.actor.apellido = actor[0];
        this.actor.fechaNacimiento = actor[1];
        this.actor.nacionalidad = actor[3];
        this.actor.nombre = actor[4];
        this.actor.sexo = actor[5];
      });
     });
  }

}
