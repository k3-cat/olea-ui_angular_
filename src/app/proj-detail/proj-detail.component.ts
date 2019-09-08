import { Component, OnInit } from '@angular/core';
import { Proj, LeafOverview } from '../proj/proj';
import { ProjService } from '../proj.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-proj-detail',
  templateUrl: './proj-detail.component.html',
  styleUrls: ['./proj-detail.component.css']
})
export class ProjDetailComponent implements OnInit {
  private proj: Proj;

  private myRoles: LeafOverview[] = [];
  private freeRoles: LeafOverview[] = [];
  private leafs: LeafOverview[] = [];

  private note = new FormControl('');


  constructor(
    private route: ActivatedRoute,
    private projService: ProjService,
    private g: GlobalService,
    private msg: MsgService
  ) { }

  ngOnInit() {
    if (this.g.init()) {
      const id = this.route.snapshot.paramMap.get('id');
      this.projService.getProj(id)
        .subscribe(proj => {
          this.proj = proj;
          this.leafs = proj.leafs.filter(h => h.pink_id != this.g.user.id);
          for (let freeRole of proj.free_roles) {
            this.freeRoles.push(new LeafOverview(freeRole[0], freeRole[1]));
          }
          this.myRoles = proj.leafs.filter(h => h.pink_id == this.g.user.id)
        });
    }
  }

  make_it_work(zone, sub_zone, list, sub_list) {
    // I hate HTML
    zone.style.display = list.length == 0 ? 'none' : 'inline-block';
    sub_zone.style.border = sub_list.length == 0 ? 'dashed 1.5px #ccc' : 'solid 1px #ccc';
  }

  sort(event: CdkDragDrop<LeafOverview[]>) {
    moveItemInArray(this.leafs, event.previousIndex, event.currentIndex);
  }

  pick(event: CdkDragDrop<LeafOverview[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let pre_leaf: LeafOverview = event.previousContainer.data[event.previousIndex]
      if (!this.g.user.deps.includes(pre_leaf.dep_)) {
        this.msg.show_msg('CWAI')
        return
      }
      this.pickRole(pre_leaf.dep_, pre_leaf.role).subscribe()
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  drop(event: CdkDragDrop<LeafOverview[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let pre_leaf: LeafOverview = event.previousContainer.data[event.previousIndex]
      if (pre_leaf.state != 'normal') {
        this.msg.show_msg('L5OM')
        return
      }
      this.dropRole(pre_leaf.id).subscribe()
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  pickRole(dep_: string, role: string) {
    return this.projService.pickRole(this.proj.id, dep_, role)
  }

  dropRole(leaf_id: string) {
    return this.projService.dropRole(leaf_id)
  }

  editNote(start: boolean = true): void {
    if (start) {
      this.note.reset(this.proj.note[1])
    } else if (this.note.touched && this.note.value != this.proj.note) {
      this.projService.editNote(this.proj.id, this.note.value).subscribe(
        response => this.note = response['note'].split('$|\n', 1)
      )
    }
  }

  book(): void {
    this.projService.book(this.proj.id).subscribe(response => this.proj.booking_user = response['booking_user'])
  }

  unbook(): void {
    this.projService.unbook(this.proj.id).subscribe()
  }
}
