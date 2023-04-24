import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { DetalleAlumnoComponent } from './pages/detalle-alumno/detalle-alumno.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    AbmAlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlumnosModule { }
