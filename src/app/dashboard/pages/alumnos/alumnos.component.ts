import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from './services/alumnos.service';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';


export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  dni: number;
  email: string;
  fecha_registro: Date;
  cursos: string;
}

@Component({
  selector: 'app-tablas',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  dataSource = new MatTableDataSource<Alumno>();

  displayedColumns: string[] = [
    'nombreCompleto',
    'email',
    'fecha_registro',
    'ver_detalle',
    'editar',
    'eliminar',
  ];
  isAdmin = false;

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.alumnosService.obtenerAlumnos().subscribe((alumnos) => {
      this.dataSource.data = alumnos;
    });
    this.authService.obtenerUsuarioAutenticado().subscribe((usuario) => {
      this.isAdmin = usuario?.role === 'admin';
    });
  }

  irAlDetalle(alumnoId: number): void {
    this.router.navigate([alumnoId], {
      relativeTo: this.activatedRoute,
    });
  }
  crearAlumno(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        const nuevoEstudiante: Alumno = {
          ...valor,
          fecha_registro: new Date(),
          id: this.dataSource.data.length + 1,
        };
  
        this.alumnosService.agregarEstudiante(nuevoEstudiante).subscribe(
          (estudianteAgregado) => {
            this.dataSource.data = [
              ...this.dataSource.data,
              ...(Array.isArray(estudianteAgregado) ? estudianteAgregado : [estudianteAgregado])
            ];
          },
        );
      }
    });
  }
  eliminarAlumno(alumnoParaEliminar: Alumno): void {
  this.httpClient.delete(`${environment.apiBaseUrl}/students/${alumnoParaEliminar.id}`)
    .subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(
          (alumnoActual) => alumnoActual.id !== alumnoParaEliminar.id
        );
      },
    );
}

  editarAlumno(alumnoParaEditar: Alumno): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        alumnoParaEditar,
      },
    });
    dialog.afterClosed().subscribe((valorDelFormulario) => {
      if (valorDelFormulario) {
        this.httpClient.put((`${environment.apiBaseUrl}/students/${alumnoParaEditar.id}`), valorDelFormulario)
          .subscribe(
            () => {
              this.dataSource.data = this.dataSource.data.map((alumnoActual) =>
                alumnoActual.id === alumnoParaEditar.id
                  ? { ...alumnoActual, ...valorDelFormulario }
                  : alumnoActual
              );
            },
          );
      }
    });
  }
}

