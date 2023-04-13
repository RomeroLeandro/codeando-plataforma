import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../alumno.interface';

@Component({
  selector: 'app-editar-alumno-modal',
  templateUrl: './editar-alumno-modal.component.html',
  styleUrls: ['./editar-alumno-modal.component.scss']
})
export class EditarAlumnoModalComponent {
  alumnoEditado: Alumno;

  constructor(public dialogRef: MatDialogRef<EditarAlumnoModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.alumnoEditado = { ...data.alumno };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.dialogRef.close({ guardar: true, alumno: { ...this.alumnoEditado } });
  }
}
