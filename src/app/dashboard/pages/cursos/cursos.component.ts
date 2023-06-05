import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Subject } from '../subjects/models';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Curso>();

  displayedColumns = [
    'id',
    'nombre',
    'fecha_inicio',
    'fecha_fin',
    'detalle',
    'editar',
    'eliminar',
  ];
  isAdmin = false;
  cursosSuscription: Subscription | null = null;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }
  ngOnDestroy(): void {
    this.cursosSuscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.cursosSuscription = this.cursosService.obtenerCursos().subscribe({
      next: (cursos) => {
        this.dataSource.data = cursos;
      },
    });

    this.authService.obtenerUsuarioAutenticado().subscribe((usuario) => {
      this.isAdmin = usuario?.role === 'admin';
    });
  }
  
  crearCurso(): void {
    const dialog = this.dialog.open(AbmCursosComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        const nuevoCurso: Curso = {
          ...valor,
          id: this.dataSource.data.length + 1,
          subjectId: this.existeSubjectId(valor.subjectId) ? valor.subjectId : this.generarNuevoSubjectId(),
        };
  
        this.cursosService.agregarCurso(nuevoCurso).subscribe(
          (cursoAgregado) => {
            this.dataSource.data = [
              ...this.dataSource.data,
              ...(Array.isArray(cursoAgregado) ? cursoAgregado : [cursoAgregado])
            ];
  
            const nuevoSubject: Subject = {
              id: nuevoCurso.subjectId,
              nombre: nuevoCurso.nombre
            };
  
            this.httpClient.post('http://localhost:3000/subjects', nuevoSubject)
          },
        );
      }
    });
  }
  existeSubjectId(subjectId: number): boolean {
    return this.dataSource.data.some(curso => curso.subjectId === subjectId);
  }
  generarNuevoSubjectId(): number {
  const maxSubjectId = this.dataSource.data.reduce((maxId, curso) => {
    return curso.subjectId > maxId ? curso.subjectId : maxId;
  }, 0);
  return maxSubjectId + 1;
}

  editarCurso(cursoParaEditar: Curso): void {
    const dialog = this.dialog.open(AbmCursosComponent, {
      data: {
        cursoParaEditar,
      },
    });
    dialog.afterClosed().subscribe((valorDelFormulario) => {
      if (valorDelFormulario) {

        this.httpClient.put((`${environment.apiBaseUrl}/courses/${cursoParaEditar.id}`), valorDelFormulario)
          .subscribe(
            () => {
              this.dataSource.data = this.dataSource.data.map((cursoActual) =>
                cursoActual.id === cursoParaEditar.id
                  ? { ...cursoActual, ...valorDelFormulario }
                  : cursoActual
              );
              this.dataSource.data = this.dataSource.data.map((cursoActual) =>
                cursoActual.subjectId === cursoParaEditar.subjectId
                  ? { ...cursoActual, ...valorDelFormulario }
                  : cursoActual
              );
            },
          );
      }
    });
  }

  eliminarCurso(cursoParaEliminar: Curso): void {
  this.httpClient.delete(`${environment.apiBaseUrl}/courses/${cursoParaEliminar.id}`)
    .subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(
          (cursoActual) => cursoActual.id !== cursoParaEliminar.id
        );
      },
      (error) => {
        console.error('Error al eliminar alumno del servidor:', error);
      }
    );
}

  irAlDetalle(cursoId: number): void {
    this.router.navigate([cursoId], {
      relativeTo: this.activatedRoute,
    });
  }

}
