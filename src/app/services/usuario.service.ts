import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token : string;
  legajo : string;
  urlBase : string = 'http://89.117.32.214:5025'
  constructor( private http : HttpClient ) {
    this.readToken()
   }



  login( data : Usuario ){
    const authData = { ...data}
    const url = `${this.urlBase}/api/Login/Loguear`;
    return this.http.post( url, authData )
  }

  register( data : Usuario ){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })

    console.log(headers)
    const url = `${this.urlBase}/api/Login/RegistrarUsuario`
    return this.http.post( url, data, {headers} )
  }

  saveToken( dataUsuario : Usuario ) {
      localStorage.setItem('token', dataUsuario.token );
      localStorage.setItem('legajo', dataUsuario.legajo );
      this.readToken();

  }

  readToken(){
    if( localStorage.getItem('token') && localStorage.getItem('legajo') ){
      this.token = localStorage.getItem('token');
      this.legajo = localStorage.getItem('legajo');
    }else {
      this.token = '';
    }

    return this.token;
}

  isAuth(){
    if( this.token.length > 10 ){
        return true;
    }else {
      return false;
    }
  }
}
