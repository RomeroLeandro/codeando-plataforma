import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../alumnos.component';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.scss'],
})
export class DetalleAlumnoComponent implements OnDestroy {
  alumno: Alumno | undefined;

  private destroyed$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {
    this.alumnosService
      .obtenerAlumnoPorId(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((alumno) => (this.alumno = alumno));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
