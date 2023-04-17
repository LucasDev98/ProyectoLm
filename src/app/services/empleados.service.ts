import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataEmployed, Employed } from '../interfaces/usuario';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  token : string;
  legajo: string;
  employes : Employed[] = [];
  urlBase : string = 'http://89.117.32.214:5025'
  constructor( private http : HttpClient ) {

    this.token = localStorage.getItem('token');
   }


  getAllemployes(){
      const url = `${this.urlBase}/api/Usuario/ObtenerTodosLosUsuarios`
      const headers = new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
      return this.http.get<DataEmployed>( url, {headers} ).pipe(
        map( ( resp  ) => {
          return resp;
        })
      )
  }
  obtenerEmpleadoPorLegajo( legajo: string ){
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
    })
    return this.http.get(`${this.urlBase}/api/Usuario/ObtenerUsuarioPorLegajo/${legajo}`, {headers} ).pipe(
      map( (resp : any ) => {
            this.employes = []
            return this.employes = [...this.employes, resp.data];

      })

    )
  }
}
