import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../alumnos.interface';

@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})
export class FormularioAlumnosComponent {
  formulario: FormGroup;

  // Emisor de eventos para notificar la adición de un nuevo alumno
  @Output() alumnoAgregado = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder, private alumnosService: AlumnosService) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      edad: ['', [Validators.required, edadMinima]],
      fechaNacimiento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    function edadMinima(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value !== null && control.value < 18) {
        return { 'edadMinima': true }; 
      }
      return null;
    }

  }

  // Método para agregar un nuevo alumno
  agregarAlumno() {
    if (this.formulario.valid) {
      const nuevoAlumno: Alumno = {
        id: this.formulario.value.Date.now(), // Generar un ID único para el nuevo alumno
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        dni: this.formulario.value.dni,
        edad: this.formulario.value.edad,
        fechaNacimiento: this.formulario.value.fechaNacimiento,
        email: this.formulario.value.email
      };

      // Llamar al servicio para agregar el nuevo alumno
      this.alumnosService.agregarAlumno(nuevoAlumno).subscribe(
        (alumnoAgregado) => {
          // Emitir el evento de alumno agregado
          this.alumnoAgregado.emit(alumnoAgregado);

          // Limpiar el formulario
          this.formulario.reset();
        },
        (error) => {
          console.error('Error al agregar alumno:', error);
        }
      );
    }
  }
  
}