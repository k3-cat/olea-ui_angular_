import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { HttpService } from './http.service';
import { ProjOverview, Proj } from './proj/proj';


@Injectable({
  providedIn: 'root'
})
export class ProjService {
  constructor(
    private http: HttpService
  ) { }

  getProjs(): Observable<ProjOverview[]> {
    return this.http.get('/proj/all');
  }

  getProj(id: string): Observable<Proj> {
    return this.http.get(`/proj/${id}`);
  }

  pickRole(proj_id: string, dep: string, role: string): Observable<{}> {
    const form = { 'proj': proj_id, 'dep': dep, 'role': role }
    return this.http.post('/leaf/pick', form);
  }

  dropRole(leaf_id: string): Observable<{}> {
    const form = { 'leaf': leaf_id }
    return this.http.post('/leaf/drop', form);
  }

  editNote(proj_id: string, note: string): Observable<{}> {
    const form = { 'proj': proj_id, 'note': note }
    return this.http.post('/proj/edit_note', form);
  }

  book(proj_id: string): Observable<{}> {
    const form = { 'proj': proj_id }
    return this.http.post('/proj/book', form);
  }

  unbook(proj_id: string): Observable<{}> {
    const form = { 'proj': proj_id }
    return this.http.post('/proj/cancll_booking', form);
  }
}
