import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormularioAlumnosModule } from '../alumnos/formulario-alumnos/formulario-alumnos.module';
import { TablaAlumnosModule } from '../alumnos/tabla-alumnos/tabla-alumnos.module';


@NgModule({
    declarations: [
    NavbarComponent
    ],
    imports: [
      CommonModule,
      MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        FormularioAlumnosModule,
        TablaAlumnosModule
    ],
    exports: [
    NavbarComponent
    ]
  })
  export class NavbarModule { }