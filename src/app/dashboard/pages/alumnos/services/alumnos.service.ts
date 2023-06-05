import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, shareReplay, tap } from 'rxjs';
import { Alumno } from '../alumnos.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private estudiantes$ = new BehaviorSubject<Alumno[]>([]);

  constructor(private httpClient: HttpClient) {}

  get estudiantes(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }
  
  agregarEstudiante(estudiante: Alumno): Observable<Alumno[]> {
    return this.httpClient.post<Alumno[]>(`${environment.apiBaseUrl}/students`, estudiante);
  }
  
  obtenerAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.apiBaseUrl}/students`).pipe(
      tap((estudiantes) => this.estudiantes$.next(estudiantes)),
      shareReplay(1)
    );
  }
  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$.asObservable().pipe(
      map((alumnos) => alumnos.find((a) => a.id === id))
    );
  }
}
