import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pink, PinkOverview } from './pink/pink';
import { HttpService } from './http.service';


@Injectable({ providedIn: 'root' })
export class PinkService {
  constructor(
    private http: HttpService
  ) { }


  getPinks(): Observable<PinkOverview[]> {
    return this.http.get('/pink/all');
  }

  getPink(id: string): Observable<Pink> {
    return this.http.get(`/pink/${id}`);
  }

  getSelf(): Observable<Pink> {
    return this.http.get(`/pink/info`);
  }
}
