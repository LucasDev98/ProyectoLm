import { Overlay, OverlayRef } from '@angular/cdk/overlay';
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
  errorRed : boolean = false;
  hide : boolean = true;
  loading : boolean = false;
  constructor( private usuarioService : UsuarioService,
               private router : Router ){


  }

  onSubmit( form : NgForm ) {
    console.log('componente activo')

    if( form.invalid ) {return}
    this.loading = true;

    this.usuarioService.login( this.usuarioLogin ).subscribe(

      ( data : Usuario ) =>{
          console.log(data)
          this.loading = false;
          this.usuarioService.saveToken( data )
          this.router.navigateByUrl('/home')
      }
      ,(err => {
        this.error = true;
        this.loading =  false,
        setTimeout(()=>{

          this.error = false;
        },3000)
      })
    )
  }
}
