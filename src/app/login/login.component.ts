import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  private hide = true;

  ngOnInit() {
  }

  login(name: string, pwd: string): void {
    this.http.login(name, pwd).subscribe(token => {
      this.http.refreshKey(token['key'])
      this.router.navigate([''])
    })
  }
}
