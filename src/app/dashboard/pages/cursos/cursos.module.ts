import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { DetalleCursoComponent } from './pages/detalle-curso/detalle-curso.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent,
    DetalleCursoComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,

    MatFormFieldModule,
    MatInputModule,

    MatTableModule,
    MatButtonModule,

    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,

    RouterModule.forChild([
      {
        // /dashboard/cursos
        path: '',
        component: CursosComponent
      },{
        path: ':id',
        component: DetalleCursoComponent,
      },
    ])
  ]
})
export class CursosModule { }