import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbSumComponent } from './reimb-sum.component';

describe('ReimbSumComponent', () => {
  let component: ReimbSumComponent;
  let fixture: ComponentFixture<ReimbSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
