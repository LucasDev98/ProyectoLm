import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

//ComponentsModules
import { ComponentsModule } from '../components/components.module';


//MaterialModules
import { MaterialModule } from '../material/material.module';
import { ObtenerUsuariosComponent } from './obtener-usuarios/obtener-usuarios.component';


@NgModule({
  declarations: [
    HomeComponent,
    ObtenerUsuariosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class PagesModule { }
