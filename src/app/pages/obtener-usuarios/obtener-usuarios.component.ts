import { Component } from '@angular/core';
import { Employed } from 'src/app/interfaces/usuario';
import { EmpleadosService } from 'src/app/services/empleados.service';


@Component({
  selector: 'app-obtener-usuarios',
  templateUrl: './obtener-usuarios.component.html',
  styleUrls: ['./obtener-usuarios.component.css']
})
export class ObtenerUsuariosComponent {
    employes : Employed[];
    error : boolean = false;
    constructor( private EmpleadosService : EmpleadosService ){

    }

    mostrarEmpleados(){
      this.EmpleadosService.getAllemployes().subscribe(resp =>{
        this.employes = resp.data;
      })
    }

    buscarEmpleado( legajo : string ){

      legajo = legajo.trim();
      if( legajo.length == 0 ){ return }

      this.EmpleadosService.obtenerEmpleadoPorLegajo( legajo ).subscribe(
        ( resp )=> {
          console.log(resp)
          console.log(resp)
          this.employes = []
          this.error = false;
          this.employes = resp;

        }
        ,(err => {
           this.error = true;

        })
        )

    }
}
