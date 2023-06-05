import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, mergeMap, switchMap, take, tap, throwError } from 'rxjs';
import { Curso, CursoWithSubject } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos$ = new BehaviorSubject<Curso[]>([]);

  constructor(private httpClient: HttpClient) {}

  get cursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }
  agregarCurso(curso: Curso): Observable<Curso[]> {
    return this.httpClient.post<Curso[]>(`${environment.apiBaseUrl}/courses`, curso);
  }
  obtenerCursos(): Observable<Curso[]> {
    return this.httpClient
      .get<Curso[]>(`${environment.apiBaseUrl}/courses`)
      .pipe(
        tap((cursos) => this.cursos$.next(cursos)),
        mergeMap(() => this.cursos$.asObservable())
      );
  }

  obtenerCursosWithSubject(): Observable<CursoWithSubject[]> {
    return this.httpClient.get<CursoWithSubject[]>(
      `${environment.apiBaseUrl}/courses?_expand=subject`
    );
  }

  getCursoById(cursoId: number): Observable<Curso | undefined> {
    return this.cursos$
      .asObservable()
      .pipe(map((cursos) => cursos.find((c) => c.id === cursoId)));
  }

eliminarCurso(cursoId: number): Observable<Curso[]> {
  const url = `${environment.apiBaseUrl}/${cursoId}`;

  return this.httpClient.delete(url).pipe(
    switchMap(() => {
      return this.obtenerCursos().pipe(
        map(cursos => cursos.filter(curso => curso.id !== cursoId))
      );
    }),
  );
}}
