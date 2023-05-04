import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { DetalleCursoComponent } from './pages/detalle-curso/detalle-curso.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CursosComponent,
      },
      {
        path: ':id',
        component: DetalleCursoComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
