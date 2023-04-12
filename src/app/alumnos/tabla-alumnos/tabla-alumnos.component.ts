
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumnos.interface';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.scss']
})
export class TablaAlumnosComponent implements OnInit {
  alumnos!: Alumno[];
  columnas: string[] = ['nombre', 'dni', 'edad', 'fechaNacimiento', 'email','acciones'];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.obtenerAlumnos();
  }

  obtenerAlumnos() {
    this.alumnosService.obtenerAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;
    });
  }

  actualizarAlumno(alumno: Alumno) {
    this.alumnosService.actualizarAlumno(alumno).subscribe(() => {
      console.log(`Alumno actualizado: ${alumno.nombre} ${alumno.apellido}`);
    });
  }

  eliminarAlumno(alumno: Alumno) {
    this.alumnosService.eliminarAlumno(alumno.id).subscribe(() => {
      console.log(`Alumno eliminado: ${alumno.nombre} ${alumno.apellido}`);
      this.obtenerAlumnos();
    });
  }
}