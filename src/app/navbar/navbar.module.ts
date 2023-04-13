import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TablaAlumnosModule } from '../alumnos/tabla-alumnos/tabla-alumnos.module';
import { MatDialog, MatDialogModule} from '@angular/material/dialog'; // Importa MatDialogModule aquí
import { CambiarTamanioFuenteDirective } from '../directive/cambiar-tamanio-fuente.directive';


@NgModule({
    declarations: [
    NavbarComponent,
    CambiarTamanioFuenteDirective
    ],
    imports: [
      CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        TablaAlumnosModule,
        MatDialogModule // Agrega MatDialogModule aquí
    ],
    exports: [
    NavbarComponent
    ],
  })
  export class NavbarModule { }