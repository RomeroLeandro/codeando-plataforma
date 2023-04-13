import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarAlumnoModalComponent } from './editar-alumno-modal.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [EditarAlumnoModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule
  ],
  exports:[
    EditarAlumnoModalComponent
  ]
})
export class EditarAlumnoModalModule { }
