import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// imports angular material
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { TablaAlumnosModule } from './alumnos/tabla-alumnos/tabla-alumnos.module';
import { FormularioAlumnosModule } from './alumnos/formulario-alumnos/formulario-alumnos.module';

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
    FormularioAlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
