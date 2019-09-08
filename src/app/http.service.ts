import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, from, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MsgService } from './msg.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private msg: MsgService
  ) { }

  private httpOption: { headers: HttpHeaders; };
  private eHttpOption: { headers: HttpHeaders; };
  private baseUrl = 'http://168.62.40.149:5000';
  inited: boolean = false;
  eInited: boolean = false;


  login(name: string, pwd: string): Observable<{}> {
    const loginForm = { 'name': name, 'pwd': pwd };
    return this.http.post<{}>(`${this.baseUrl}/auth/login`, loginForm).pipe(
      catchError(this.handleError)
    )
  }

  revoke(all: boolean): void {
    this.post(`/auth/${all ? 'revork_all' : 'revork'}`, {});
    this.revokeKeys
  }

  revokeKeys(): void {
    localStorage.removeItem('key');
    localStorage.removeItem('eKey');
    this.inited = false;
    this.httpOption = null;
    this.eInited = false;
    this.eHttpOption = null;
  }

  refreshKey(key: string): void {
    localStorage.setItem('key', key);
    this.httpOption = null;
    this.inited = false;
  }

  refreshEKey(eKey: string): void {
    localStorage.setItem('eKey', eKey);
    this.eHttpOption = null;
    this.eInited = false;
  }

  setHttpOption(): boolean {
    let key = localStorage.getItem('key');
    if (key == null) { return false; }
    this.httpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `OLEA ${key}` })
    };
    this.inited = true;
    return true;
  }

  setEHttpOption(): boolean {
    let eKey = localStorage.getItem('eKey')
    if (eKey == null) { return false; }
    this.eHttpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `EUROPAEA ${eKey}` })
    };
    this.eInited = true;
    return true;
  }


  get(url: string): Observable<any> {
    let obj;
    this.http.get(this.baseUrl + url, this.httpOption)
      .pipe(
        catchError(this.handleError)
      ).subscribe(h => obj = h)
    return of(obj)
  }

  post(url: string, form: {}): Observable<any> {
    let obj;
    this.http.post(this.baseUrl + url, form, this.httpOption)
      .pipe(
        catchError(this.handleError)
      ).subscribe(h => obj = h)
    return of(obj)
  }

  eGet(url: string): Observable<any> {
    let obj;
    this.http.get(this.baseUrl + url, this.eHttpOption)
      .pipe(
        catchError(this.handleError)
      ).subscribe(h => obj = h)
    return of(obj)
  }

  ePost(url: string, form: {}): Observable<any> {
    let obj;
    this.http.post(this.baseUrl + url, form, this.eHttpOption)
      .pipe(
        catchError(this.handleError)
      ).subscribe(h => obj = h)
    return of(obj)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status == 409) {
        this.msg.show_msg(error.error['code'])
      } else if (error.status == 401) {
        this.revokeKeys()
        this.msg.show_msg('500')
      } else if (error.status == 500) {
        this.msg.show_msg('500')
      }
    }
    // return an observable with a user-facing error message
    return throwError(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  };
}
