import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../alumnos/alumnos.interface'

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {
  transform(alumno: Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }
}