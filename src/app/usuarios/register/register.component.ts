import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error : boolean = false;
  hide : boolean = false;
  usuarioRegister : UsuarioModel = new UsuarioModel();

  onSubmit( form : NgForm ) {

  }
}
