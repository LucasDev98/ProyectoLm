import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employed } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() drawer : any;
  @Input() perfil : Employed;

  constructor( private router : Router ){

  }

  ngOnInit(): void {

  }


  salir(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
