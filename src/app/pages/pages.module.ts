import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

//ComponentsModules
import { ComponentsModule } from '../components/components.module';
//Routes Pages
import { PagesRoutingModule } from './pages-routing.module';

//MaterialModules
import { MaterialModule } from '../material/material.module';
import { ObtenerUsuariosComponent } from './obtener-usuarios/obtener-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ObtenerUsuariosComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
