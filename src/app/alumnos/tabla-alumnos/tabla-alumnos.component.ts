import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarAlumnoModalComponent } from './agregar-alumno-modal/agregar-alumno-modal.component';
import { EditarAlumnoModalComponent } from './editar-alumno-modal/editar-alumno-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../alumno.interface';


@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.scss']
})
export class TablaAlumnosComponent implements OnInit {
  
  alumnos: any[] = [];
  columnas: string[] = ['nombre','dni', 'edad','fechaNacimiento','email', 'acciones']; // Columnas de la tabla
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([])

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    // Inicializar datos de ejemplo en el array de alumnos
    this.alumnos = [
      {
        id:1,
        nombre: 'Juan',
        apellido: 'Perez',
        dni: '12345678',
        edad: 25,
        fechaNacimiento: new Date('1998-05-15'),
        email: 'juan.perez@example.com'
      },
      {
        id:2,
        nombre: 'María',
        apellido: 'González',
        dni: '98765432',
        edad: 28,
        fechaNacimiento: new Date('1993-08-20'),
        email: 'maria.gonzalez@example.com'
      },
      {
        id:3,
        nombre: 'Pedro',
        apellido: 'Sánchez',
        dni: '56789012',
        edad: 30,
        fechaNacimiento: new Date('1991-02-10'),
        email: 'pedro.sanchez@example.com'
      }
    ];

    // Actualizar el dataSource con los datos iniciales de los alumnos
    this.dataSource.data = this.alumnos;
  }

  agregarAlumno() {
    const dialogRef = this.dialog.open(AgregarAlumnoModalComponent, {
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.guardar) {
        // Generar un nuevo ID para el nuevo alumno
        const nuevoId = this.alumnos.length > 0 ? Math.max(...this.alumnos.map(a => a.id)) + 1 : 1;
  
        // Crear un nuevo alumno con los datos del formulario
        const nuevoAlumno = {
          id: nuevoId,
          nombre: result.alumno.nombre,
          apellido: result.alumno.apellido,
          dni: result.alumno.dni,
          edad: result.alumno.edad,
          fechaNacimiento: result.alumno.fechaNacimiento,
          email: result.alumno.email
        };
  
        // Agregar el nuevo alumno al array de alumnos
        this.alumnos.push(nuevoAlumno);
  
        // Actualizar el dataSource y detectar los cambios
        this.dataSource.data = this.alumnos;
        this.cdr.detectChanges();
      }
    });
  }

  eliminarAlumno(alumno: any): void {
    // Eliminar el alumno del array de la tabla
    this.alumnos = this.alumnos.filter(a => a.id !== alumno.id);
  }

  editarAlumno(alumno: any): void {
    // Abrir modal o ventana de edición con los datos del alumno
    const dialogRef = this.dialog.open(EditarAlumnoModalComponent, {
      width: '300px',
      data: { alumno: { ...alumno } } // Pasar los datos del alumno seleccionado como dato
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.guardar) {
        // Encontrar el índice del alumno en el array
        const index = this.alumnos.findIndex(a => a.id === alumno.id);
  
        if (index !== -1) {
          // Actualizar los datos del alumno en el array
          this.alumnos[index].nombre = result.alumno.nombre;
          this.alumnos[index].apellido = result.alumno.apellido;
          this.alumnos[index].dni = result.alumno.dni;
          this.alumnos[index].edad = result.alumno.edad;
          this.alumnos[index].fechaNacimiento = result.alumno.fechaNacimiento;
          this.alumnos[index].email = result.alumno.email;
        }
      }
    });
  }
}
