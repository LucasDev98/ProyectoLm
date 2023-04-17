import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



//MaterialModules
import { MaterialModule } from '../material/material.module';
import { OverlayComponent } from './overlay/overlay.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OverlayComponent,
    SpinnerComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    OverlayComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
