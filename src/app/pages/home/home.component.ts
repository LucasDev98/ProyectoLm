import { Component } from '@angular/core';
import { Employed } from 'src/app/interfaces/usuario';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  showFiller = false;
  perfil : Employed;
  legajo: string;


  constructor( private empleadosService : EmpleadosService ) {
    this.legajo = localStorage.getItem('legajo')
    this.empleadosService.obtenerEmpleadoPorLegajo( this.legajo ).subscribe( data => {
      this.perfil = data[0];

    })

  }



  navegar( url : string ){

  }
}
