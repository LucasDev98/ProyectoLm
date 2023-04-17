import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { ObtenerUsuariosComponent } from './obtener-usuarios/obtener-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';



export const ROUTES_PAGES : Routes = [
  {
    path: 'usuarios', component: ObtenerUsuariosComponent
  },
  {
    path: 'registrar-usuario', component: RegistrarUsuarioComponent
  }
]


@NgModule({
  imports:[RouterModule.forRoot(ROUTES_PAGES)],
  exports:[RouterModule]

})
export class PagesRoutingModule { }
