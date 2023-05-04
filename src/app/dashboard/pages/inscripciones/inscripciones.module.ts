import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InscripcionesComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: InscripcionesComponent,
      },
    ]),
  ],
  exports: [InscripcionesComponent],
})
export class InscripcionesModule {}
