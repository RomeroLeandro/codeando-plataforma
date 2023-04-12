import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { FormularioAlumnosModule } from '../formulario-alumnos/formulario-alumnos.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
    NavbarComponent
    ],
    imports: [
      CommonModule,
      FormularioAlumnosModule,
      MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
    ],
    exports: [
    NavbarComponent
    ]
  })
  export class NavbarModule { }