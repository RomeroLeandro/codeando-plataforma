import { Subject } from "../../subjects/models";

export interface Curso {
  id: number;
  subjectId: number;
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}
export interface CursoWithSubject extends Curso {
  subject: Subject;
}

export interface CrearCursoPayload {
  subjectId: number;
  fecha_inicio: Date;
  fecha_fin: Date;
}
