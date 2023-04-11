import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() drawer : any;

  constructor( private router : Router ){

  }


  salir(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
