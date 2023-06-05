import { Component, OnDestroy } from '@angular/core';
import { Curso } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.scss'],
})
export class DetalleCursoComponent implements OnDestroy {
  curso: Curso | undefined;

  private destroyed$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService
  ) {
    this.cursoService
      .getCursoById(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((curso) => (this.curso = curso));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
