import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario : Usuario = Object();
  recordar : boolean = false;
  error : boolean = false;
  hide : boolean = true;

  constructor(){

  }

  onSubmit( form : NgForm ) {
      console.log( form )
  }
}
