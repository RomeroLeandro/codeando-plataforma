import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaAlumnosComponent } from './tabla-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormularioAlumnosModule } from '../formulario-alumnos/formulario-alumnos.module';
import { EditarAlumnoModalModule } from './editar-alumno-modal/editar-alumno-modal.module';
import { AgregarAlumnoModalModule } from './agregar-alumno-modal/agregar-alumno-modal.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NombreCompletoPipe } from 'src/app/pipes/nombreCompleto.pipe';




@NgModule({
  declarations: [
    TablaAlumnosComponent,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    FormularioAlumnosModule,
    EditarAlumnoModalModule,
    AgregarAlumnoModalModule,
    MatDialogModule, // Asegúrate de que MatDialogModule esté importado aquí
    MatInputModule,
    
  ],
  exports: [
    TablaAlumnosComponent
  ],
  
})
export class TablaAlumnosModule { }
