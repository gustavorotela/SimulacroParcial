import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Router } from '@angular/router';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  @Input() actor:any;

  Confirmar:Boolean = false;
  actorEliminar:any;

  constructor(private miHttp:MiHttpService,private router:Router) {
    this.actor = new Actor();
    this.actorEliminar = new Actor();
   }

  modificar(id)
  {
    this.router.navigate(['/actor/modificar/'+id]);
  }

  eliminar(actor)
  {
    this.actorEliminar = actor
  }

  eventoConfirmacion(confirmar)
  {
    if(confirmar == true)
    {
      this.miHttp.eliminarActor(this.actorEliminar.id.toString());
    }
  }

  ngOnInit(): void {
    console.log(this.actor);
  }

}
