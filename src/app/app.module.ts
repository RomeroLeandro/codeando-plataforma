import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// imports angular material
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { TablaAlumnosModule } from './alumnos/tabla-alumnos/tabla-alumnos.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgregarAlumnoModalModule } from './alumnos/tabla-alumnos/agregar-alumno-modal/agregar-alumno-modal.module';
import { EditarAlumnoModalModule } from './alumnos/tabla-alumnos/editar-alumno-modal/editar-alumno-modal.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    HttpClientModule,
    TablaAlumnosModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    AgregarAlumnoModalModule,
    EditarAlumnoModalModule,
    MatDialogModule,
    MatInputModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
