import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { DetalleAlumnoComponent } from './dashboard/pages/alumnos/pages/detalle-alumno/detalle-alumno.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { InscripcionesComponent } from './dashboard/pages/inscripciones/inscripciones.component';
import { DetalleCursoComponent } from './dashboard/pages/cursos/pages/detalle-curso/detalle-curso.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'estudiantes',
        children: [
          {
            path: '',
            component: AlumnosComponent,
          },
          {
            path: ':id',
            component: DetalleAlumnoComponent,
          },
        ],
      },
      {
        path: 'cursos',
        children: [
          {
            path: '',
            component: CursosComponent,
          },
          {
            path: ':id',
            component: DetalleCursoComponent,
          },
        ],
      },
      {
        path: 'inscripciones',
        component: InscripcionesComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
