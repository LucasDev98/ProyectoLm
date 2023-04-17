import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  error : boolean = false;
  hide : boolean = false;
  registroExitoso : boolean = false;
  usuarioRegister : UsuarioModel = new UsuarioModel();
  constructor( private usuarioService : UsuarioService ){

  }

  onSubmit( form : NgForm ) {
    if( form.invalid ){return}
    this.usuarioService.register(this.usuarioRegister).subscribe(
        (data => {
          this.registroExitoso = true;
          form.reset({"usuario": ''})
          form.reset({"nombre": ''})
          form.reset({"password": ''})
          form.reset({"mail": ''})
          setTimeout(()=>{
            this.registroExitoso = false;
          },2000)
        }),
        (err => {
          this.error = true;
        })
    )
  }
}
