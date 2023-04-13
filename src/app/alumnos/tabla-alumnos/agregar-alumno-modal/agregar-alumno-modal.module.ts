import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarAlumnoModalComponent } from './agregar-alumno-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData');

@NgModule({
  declarations: [AgregarAlumnoModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule
    
  ],
  exports:[
    AgregarAlumnoModalComponent
  ],
  providers: [
    // Agrega los proveedores necesarios, incluyendo MAT_MDC_DIALOG_DATA
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_MDC_DIALOG_DATA, useValue: {} }
  ]
  
})
export class AgregarAlumnoModalModule { }
