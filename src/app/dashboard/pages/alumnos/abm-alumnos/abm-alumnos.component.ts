import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss'],
})
export class AbmAlumnosComponent {
  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  edadControl = new FormControl('', [Validators.required]);
  dniControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    edad: this.edadControl,
    dni: this.dniControl,
    email: this.emailControl,
  });

  constructor(
    private dialogRef: MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.nombreControl.setValue(data.alumnoParaEditar.nombre);
      this.apellidoControl.setValue(data.alumnoParaEditar.apellido);
      this.edadControl.setValue(data.alumnoParaEditar.edad);
      this.dniControl.setValue(data.alumnoParaEditar.dni);
      this.emailControl.setValue(data.alumnoParaEditar.email);
    }
  }

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value);
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
