import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from './alumnos.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = 'assets/alumnos.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) { }

  // Método para obtener todos los alumnos del archivo JSON
  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }
  

  // Método para obtener un alumno por su ID del archivo JSON
  obtenerAlumnoPorId(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }

  // Método para agregar un nuevo alumno al archivo JSON
  agregarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumno);
  }

  // Método para actualizar un alumno en el archivo JSON
  actualizarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.apiUrl}/${alumno.id}`, alumno);
  }

  eliminarAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}