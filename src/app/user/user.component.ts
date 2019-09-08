import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GlobalService } from '../global.service'
import { PinkService } from '../pink.service';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private hide = true;
  private editInfo = false;

  private qq = new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.minLength(9),]);
  private line = new FormControl('', [Validators.minLength(2),]);
  private email = new FormControl('', [Validators.email]);
  private pwd = new FormControl('', [Validators.minLength(8),]);

  constructor(
    private router: Router,
    private pinkService: PinkService,
    private http: HttpService,
    private g: GlobalService) { }

  ngOnInit() {
    if (this.g.init()) {
    }
  }

  updateInfo(showinfo, editinfo): void {
    if (this.qq.invalid || this.line.invalid || this.email.invalid) { return }
    let form = {};
    let dirty = false;
    if (this.qq.touched && this.qq.value != this.g.user.qq) {
      dirty = true;
      form['qq'] = this.qq.value;
    }
    if (this.line.touched && this.line.value != this.g.user.line) {
      dirty = true;
      form['line'] = this.line.value;
    }
    if (this.email.touched && this.email.value != '') {
      dirty = true;
      form['email'] = this.email.value;
    }
    if (dirty) {
      this.http.post('/pink/update_info', form);
      this.pinkService.getPink(this.g.user.id).subscribe(pink => {
        this.g.user = pink;
        this.qq.reset(pink.qq);
        this.line.reset(pink.line);
        this.email.reset();
      });
    }
    showinfo.style.display = 'block';
    editinfo.style.display = 'none';
  }

  setPwd(): void {
    if (this.pwd.value == '' || this.pwd.invalid) { return }
    const setPwdForm = { 'pwd': this.pwd.value };
    this.http.post('/auth/set_pwd', setPwdForm);
    this.pwd.reset();
  }

  revorkToken(all: boolean = false): void {
    this.http.revoke(all)
    this.router.navigate(['/login']);
  }

  setEToken(eKey: string): void {
    this.http.refreshEKey(eKey);
  }
}
