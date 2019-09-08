import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pink } from '../pink/pink';
import { PinkService } from '../pink.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-pink-detail',
  templateUrl: './pink-detail.component.html',
  styleUrls: ['./pink-detail.component.css']
})
export class PinkDetailComponent implements OnInit {
  private pink: Pink;

  constructor(
    private route: ActivatedRoute,
    private pinkService: PinkService,
    private g: GlobalService,
  ) { }

  ngOnInit() {
    if (this.g.init()) {
      this.getPink();
    }
  }

  getPink(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pinkService.getPink(id)
      .subscribe(pink => this.pink = pink);
  }
}
