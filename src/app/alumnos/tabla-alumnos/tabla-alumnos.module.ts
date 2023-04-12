import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaAlumnosComponent } from './tabla-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NombreCompletoPipe } from '../../pipes/nombreCompleto.pipe';



@NgModule({
  declarations: [
    TablaAlumnosComponent,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    TablaAlumnosComponent
  ]
})
export class TablaAlumnosModule { }
