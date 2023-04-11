import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuarioLogin : Usuario = new UsuarioModel();
  recordar : boolean = false;
  error : boolean = false;
  hide : boolean = true;

  constructor( private usuarioService : UsuarioService,
               private router : Router ){


  }

  onSubmit( form : NgForm ) {
     if( form.invalid ) {return}

    this.usuarioService.login( this.usuarioLogin ).subscribe(
      ( data : Usuario ) =>{
          this.usuarioService.saveToken( data )
          this.router.navigateByUrl('/home')
      }
      ,(err => {
        this.error = true;
        setTimeout(()=>{
          this.error = false;
        },3000)
      })
    )
  }
}
