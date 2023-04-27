import { Alumno } from '../../alumnos/alumnos.component';
import { Curso } from '../../cursos/models/index';

export interface Inscripcion {
  cursos: Curso[];
  alumnos: Alumno[];
}
