import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource();

  displayedColumns = [
    'nombre',
    'fecha_inicio',
    'fecha_fin',
    'detalle',
    'editar',
    'eliminar',
  ];

  cursosSuscription: Subscription | null = null;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.cursosSuscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.cursosSuscription = this.cursosService.obtenerCursos().subscribe({
      next: (cursos) => {
        this.dataSource.data = cursos;
      },
    });
  }

  crearCurso(): void {
    const dialog = this.dialog.open(AbmCursosComponent);
    dialog.afterClosed().subscribe((formValue) => {
      if (formValue) {
        this.cursosService.crearCurso(formValue);
      }
    });
  }

  editarCurso(curso: Curso): void {
    const dialog = this.dialog.open(AbmCursosComponent, {
      data: {
        curso,
      },
    });

    dialog.afterClosed().subscribe((formValue) => {
      if (formValue) {
        this.cursosService.editarCurso(curso.id, formValue);
      }
    });
  }

  eliminarCurso(curso: Curso): void {
    if (confirm('Está seguro?')) {
      this.cursosService.eliminarCurso(curso.id);
    }
  }

  aplicarFiltros(ev: Event): void {}

  irAlDetalle(cursoId: number): void {
    this.router.navigate([cursoId], {
      relativeTo: this.activatedRoute,
    });
  }
}
