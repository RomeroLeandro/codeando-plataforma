import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { DetalleAlumnoComponent } from './pages/detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AlumnosComponent,
      },
      {
        path: ':id',
        component: DetalleAlumnoComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
