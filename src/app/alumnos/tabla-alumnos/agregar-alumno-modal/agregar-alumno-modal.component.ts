import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from '../../alumno.interface';

@Component({
  selector: 'app-agregar-alumno-modal',
  templateUrl: './agregar-alumno-modal.component.html',
  styleUrls: ['./agregar-alumno-modal.component.scss']
})
export class AgregarAlumnoModalComponent {
  @Output() alumnoAgregado: EventEmitter<any> = new EventEmitter<any>();
  nuevoAlumno: Alumno = { nombre: '',apellido: '',dni: '',edad: 0,fechaNacimiento: new Date,email: ''};
  editandoAlumno: boolean = false; // Bandera para indicar si se está editando un alumno
  alumnoEditado: Alumno = { nombre: '',apellido: '',dni: '',edad: 0,fechaNacimiento: new Date,email: '' }; // Alumno que se está editando
  
  constructor(
    public dialogRef: MatDialogRef<AgregarAlumnoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      // Verificar si se está editando un alumno
      if (data && data.alumno) {
        this.editandoAlumno = true;
        this.alumnoEditado = { ...data.alumno };
        this.nuevoAlumno = { ...data.alumno };
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validar que se hayan ingresado todos los campos requeridos
    if (this.nuevoAlumno.nombre && this.nuevoAlumno.nombre.trim() !== '' &&
        this.nuevoAlumno.apellido && this.nuevoAlumno.apellido.trim() !== '' &&
        this.nuevoAlumno.dni && this.nuevoAlumno.dni.trim() !== '' &&
        this.nuevoAlumno.edad && this.nuevoAlumno.edad > 0 &&
        this.nuevoAlumno.fechaNacimiento && typeof this.nuevoAlumno.fechaNacimiento === 'object' &&
        this.nuevoAlumno.email && this.nuevoAlumno.email.trim() !== '') {
      // Pasar el resultado al componente padre (ListaAlumnosComponent) y cerrar el modal
      this.dialogRef.close({ guardar: true, alumno: { ...this.nuevoAlumno } });
    }
  }
}
