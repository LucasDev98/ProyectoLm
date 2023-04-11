import { HttpClient, HttpHeaders } from '@angular/common/http';
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

   }



  login( data : Usuario ){
    const authData = { ...data}
    return this.http.post(`${this.urlBase}/api/Login/Loguear`, authData )
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
