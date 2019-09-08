import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Proj } from './proj';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {
  constructor(
    private g: GlobalService) {
  }

  ngOnInit() {
    if (this.g.init()) {
    }
  }

  goSource(proj: Proj): void {
    window.open(`${proj.cat == 'nomal_eng' ? 'http://www.scp-wiki.net' : 'http://scp-wiki-cn.wikidot.com'}${proj.url}`, "_blank")
  }
}
