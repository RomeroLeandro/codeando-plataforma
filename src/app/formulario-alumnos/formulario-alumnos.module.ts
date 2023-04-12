import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAlumnosComponent } from './formulario-alumnos.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    FormularioAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    FormularioAlumnosComponent
  ]
})
export class FormularioAlumnosModule { }
