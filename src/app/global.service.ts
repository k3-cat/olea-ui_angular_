import { Injectable } from '@angular/core';
import { Pink, PinkOverview } from './pink/pink';
import { Observable, of, from } from 'rxjs';
import { ProjOverview } from './proj/proj';
import { PinkService } from './pink.service';
import { Router } from '@angular/router';
import { ProjService } from './proj.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private pinkService: PinkService,
    private router: Router,
    private projService: ProjService,
    private http: HttpService) { }

  user: Pink;
  pinks: PinkOverview[];
  projs: ProjOverview[];

  init(): boolean {
    if (this.http.inited) { return true; }
    if (!this.http.setHttpOption()) {
      this.router.navigate(['/login']);
      return false;
    }
    this.pinkService.getSelf().subscribe(pink => this.user = pink);
    this.pinkService.getPinks().subscribe(pinks => this.pinks = pinks);
    this.projService.getProjs().subscribe(projs => this.projs = projs);
    return true;
  }

  initE(): boolean {
    if (this.http.eInited) { return true; }
    if (!this.http.setEHttpOption()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
