import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css'],
})
export class PinkComponent implements OnInit {
  displayedColumns: string[] = ['name', 'qq', 'line', 'deps'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource(this.g.pinks);

  constructor(
    private g: GlobalService
  ) { }

  ngOnInit() {
    if (this.g.init()) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
