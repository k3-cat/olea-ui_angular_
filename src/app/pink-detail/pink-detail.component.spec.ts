import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkDetailComponent } from './pink-detail.component';

describe('PinkDetailComponent', () => {
  let component: PinkDetailComponent;
  let fixture: ComponentFixture<PinkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
