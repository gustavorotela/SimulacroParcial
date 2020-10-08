import { Component, OnInit } from '@angular/core';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listadoPaises = [];

  constructor(private miHttp:MiHttpService) { }

  ngOnInit(): void {
    this.miHttp.obtenerPaises().subscribe((paises:any) => {
      console.log(paises);
      this.listadoPaises = paises;
    });
  }

}
