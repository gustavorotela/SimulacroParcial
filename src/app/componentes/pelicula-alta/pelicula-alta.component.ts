import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  nuevaPelicula:Pelicula;
  id:number;
  listaActores = [];
  actoresSeleccionados:number[] = [];

  constructor(private miHttp:MiHttpService) { 
    this.nuevaPelicula = new Pelicula();
  }

  guardarPelicula()
  {
    for (let i = 1; i <= this.listaActores.length; i++) {
      console.log((<HTMLInputElement>document.getElementById("check"+i)).value);
    }
    this.nuevaPelicula.id = this.id;
    this.miHttp.cargarPelicula(this.nuevaPelicula,this.id.toString());
    //window.location.reload();
  }

  checkActor(id)
  {
    
  }

  ngOnInit(): void {
    this.miHttp.ultimoIdPelicula().subscribe( data => {
      if(data == "")
        this.id = 1
      else
      {
        this.id = data[0].id;
        this.id++;
      }
    });
    this.miHttp.traerActores().subscribe( data => {
      this.listaActores = data;
    });
  }
}
