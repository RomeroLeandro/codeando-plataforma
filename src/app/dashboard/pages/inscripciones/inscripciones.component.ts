import { Component, Input } from '@angular/core';
import { InscripcionesService } from './services/inscripciones.service';
import { Inscripcion } from './models';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss'],
})
export class InscripcionesComponent {
  inscripcion: Inscripcion[] = [
    {
      alumnos: [
        {
          id: 1,
          nombre: 'Juan',
          apellido: 'Pérez',
          edad: 30,
          dni: 12345678,
          email: 'juan.perez@example.com',
          fecha_registro: new Date(2022, 2, 15),
          cursos: 'Angular',
        },
      ],
      cursos: [
        {
          id: 1,
          nombre: 'Angular',
          fecha_fin: new Date(),
          fecha_inicio: new Date(),
          alumno: 'Juan Perez',
        },
      ],
    },
    {
      alumnos: [
        {
          id: 2,
          nombre: 'María',
          apellido: 'Gómez',
          edad: 25,
          dni: 23456789,
          email: 'maria.gomez@example.com',
          fecha_registro: new Date(2022, 6, 23),
          cursos: 'Desarrollo Web',
        },
      ],
      cursos: [
        {
          id: 3,
          nombre: 'Desarrollo Web',
          fecha_fin: new Date(),
          fecha_inicio: new Date(),
          alumno: 'Maria Gomez',
        },
      ],
    },
    {
      alumnos: [
        {
          id: 3,
          nombre: 'Pedro',
          apellido: 'Sánchez',
          edad: 40,
          dni: 34567890,
          email: 'pedro.sanchez@example.com',
          fecha_registro: new Date(2023, 1, 14),
          cursos: 'React',
        },
      ],
      cursos: [
        {
          id: 4,
          nombre: 'React',
          fecha_fin: new Date(),
          fecha_inicio: new Date(),
          alumno: 'Pedro Sanchez',
        },
      ],
    },
    {
      alumnos: [
        {
          id: 4,
          nombre: 'Ana',
          apellido: 'Martínez',
          edad: 35,
          dni: 45678901,
          email: 'ana.martinez@example.com',
          fecha_registro: new Date(2022, 9, 10),
          cursos: 'Javascript',
        },
      ],
      cursos: [
        {
          id: 2,
          nombre: 'Javascript',
          fecha_fin: new Date(),
          fecha_inicio: new Date(),
          alumno: 'Ana Martinez',
        },
      ],
    },
    {
      alumnos: [
        {
          id: 5,
          nombre: 'Carlos',
          apellido: 'García',
          edad: 28,
          dni: 56789012,
          email: 'carlos.garcia@example.com',
          fecha_registro: new Date(2022, 11, 25),
          cursos: 'Backend',
        },
      ],
      cursos: [
        {
          id: 5,
          nombre: 'Backend',
          fecha_fin: new Date(),
          fecha_inicio: new Date(),
          alumno: 'Carlos Garcia',
        },
      ],
    },
  ];
}
