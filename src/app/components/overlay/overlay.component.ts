import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {



  constructor( private overlay : Overlay ) {


  }


}
