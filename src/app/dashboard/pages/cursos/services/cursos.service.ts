import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take, tap } from 'rxjs';
import { CrearCursoPayload, Curso, CursoWithSubject } from '../models';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';

const CURSOS_MOCKS: Curso[] = [
  {
    id: 1,
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
    alumno: 'Juan Perez',
  },
  {
    id: 2,
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
    alumno: 'Ana Martinez',
  },
  {
    id: 3,
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
    alumno: 'Maria Gomez',
  },
  {
    id: 4,
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
    alumno: 'Pedro Sanchez',
  },
  {
    id: 5,
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
    alumno: 'Carlos Garcia',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos$ = new BehaviorSubject<Curso[]>([]);

  constructor(private httpClient: HttpClient) {}

  get cursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.httpClient
      .get<Curso[]>(`${enviroment.apiBaseUrl}/courses?_expand=subject`)
      .pipe(
        tap((cursos) => this.cursos$.next(cursos)),
        mergeMap(() => this.cursos$.asObservable())
      );
  }

  obtenerCursosWithSubject(): Observable<CursoWithSubject[]> {
    return this.httpClient.get<CursoWithSubject[]>(
      `${enviroment.apiBaseUrl}/courses?_expand=subject`
    );
  }

  getCursoById(cursoId: number): Observable<Curso | undefined> {
    return this.cursos$
      .asObservable()
      .pipe(map((cursos) => cursos.find((c) => c.id === cursoId)));
  }

  crearCurso(payload: CrearCursoPayload): Observable<Curso[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        this.cursos$.next([
          ...cursos,
          {
            id: cursos.length + 1,
            ...payload,
          },
        ]);
      },
      complete: () => {},
      error: () => {},
    });

    // then => next
    // catch => error
    // finally => complete

    return this.cursos$.asObservable();
  }

  editarCurso(
    cursoId: number,
    actualizacion: Partial<Curso>
  ): Observable<Curso[]> {
    this.cursos$.pipe(take(1));
    // .subscribe({
    //   next: (cursos) => {

    //     const cursosActualizados = cursos.map((curso) => {
    //       if (curso.id === cursoId) {
    //         return {
    //           ...curso,
    //           ...actualizacion,
    //         }
    //       } else {
    //         return curso;
    //       }
    //     })

    //     this.cursos$.next(cursosActualizados);
    //   },
    //   complete: () => {},
    //   error: () => {}
    // });

    return this.cursos$.asObservable();
  }

  eliminarCurso(cursoId: number): Observable<Curso[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        const cursosActualizados = cursos.filter(
          (curso) => curso.id !== cursoId
        );
        this.cursos$.next(cursosActualizados);
      },
      complete: () => {},
      error: () => {},
    });

    return this.cursos$.asObservable();
  }
}