import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Alumno } from '../alumnos.component';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  // Subject
  private estudiantes2$ = new Subject<Alumno[]>();

  // BehaviorSubject
  private estudiantes$ = new BehaviorSubject<Alumno[]>([
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      edad: 30,
      dni: 12345678,
      email: 'juan.perez@example.com',
      fecha_registro: new Date(),
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'Gómez',
      edad: 25,
      dni: 23456789,
      email: 'maria.gomez@example.com',
      fecha_registro: new Date(),
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Sánchez',
      edad: 40,
      dni: 34567890,
      email: 'pedro.sanchez@example.com',
      fecha_registro: new Date(),
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'Martínez',
      edad: 35,
      dni: 45678901,
      email: 'ana.martinez@example.com',
      fecha_registro: new Date(),
    },
    {
      id: 5,
      nombre: 'Carlos',
      apellido: 'García',
      edad: 28,
      dni: 56789012,
      email: 'carlos.garcia@example.com',
      fecha_registro: new Date(),
    },
  ]);

  constructor() {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$
      .asObservable()
      .pipe(map((alumnos) => alumnos.find((a) => a.id === id)));
  }
}
