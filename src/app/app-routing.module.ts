import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { PeliculaModificarComponent } from './componentes/pelicula-modificar/pelicula-modificar.component';

const routes: Routes = [
  {path: "", component:BienvenidoComponent},
  {path: "busqueda", component:BusquedaComponent},
  {path: "peliculas/alta", component:PeliculaAltaComponent},
  {path: "actor/alta", component:ActorAltaComponent},
  {path: "actor/listado", component:ActorListadoComponent},
  {path: "peliculas/listado", component:PeliculaListadoComponent},
  {path: "peliculas/modificar/:id", component:PeliculaModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
