import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Alumno {
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})
export class FormularioAlumnosComponent {
  @Input() alumno: Alumno | null = null;
  @Output() agregar = new EventEmitter<Alumno>();
  @Output() editar = new EventEmitter<Alumno>();
  @Output() cancelar = new EventEmitter<void>();

  // Métodos para agregar, editar y cancelar la edición de un alumno
  guardarAlumno(): void {
    if (this.alumno) {
      if (this.alumno.id) {
        this.editar.emit(this.alumno);
      } else {
        this.agregar.emit(this.alumno);
      }
    }
    this.alumno = null;
  }

  cancelarEdicion(): void {
    this.alumno = null;
    this.cancelar.emit();
  }
}
