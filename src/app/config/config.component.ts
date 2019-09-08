import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  positionOptions: string[] = ['English', '简体中文', '正體中文'];
  ui_lang = new FormControl(this.positionOptions[0]);

}
