import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
