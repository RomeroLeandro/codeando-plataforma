import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import {
  CreateInscripcionData,
  Inscripcion,
  InscripcionWithAll,
} from '../models';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  constructor(private httpClient: HttpClient) {}

  createInscripcion(data: CreateInscripcionData): Observable<InscripcionWithAll> {
    return this.httpClient
      .post<Inscripcion>(`${environment.apiBaseUrl}/inscriptions`, data)
      .pipe(
        concatMap((createResponse) =>
          this.getInscriptionWithAllById(createResponse.id)
        )
      );
  }

  getInscriptionWithAllById(id: number): Observable<InscripcionWithAll> {
    return this.httpClient.get<InscripcionWithAll>(
      `${environment.apiBaseUrl}/inscriptions/${id}?_expand=student&_expand=subject&_expand=course`
    )
  }

  getAllInscripciones(): Observable<InscripcionWithAll[]> {
    return this.httpClient.get<InscripcionWithAll[]>(
      `${environment.apiBaseUrl}/inscriptions?_expand=course&_expand=student&_expand=subject`
    );
  }

  deleteInscripcionById(id: number): Observable<unknown> {
    return this.httpClient.delete(
      `${environment.apiBaseUrl}/inscriptions/${id}`
    );
  }
}
