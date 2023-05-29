import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Alumno } from '../alumnos.component';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';

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
      fecha_registro: new Date(2022, 2, 15),
      cursos: 'Angular',
    },
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
  ]);

  constructor(private httpClient: HttpClient) { }


  getStudentsFromDB(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${enviroment.apiBaseUrl}/students`);
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}
