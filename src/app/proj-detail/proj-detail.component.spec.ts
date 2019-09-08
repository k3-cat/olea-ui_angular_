import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDetailComponent } from './proj-detail.component';

describe('ProjDetailComponent', () => {
  let component: ProjDetailComponent;
  let fixture: ComponentFixture<ProjDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
