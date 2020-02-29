import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbFormComponent } from './reimb-form.component';

describe('ReimbFormComponent', () => {
  let component: ReimbFormComponent;
  let fixture: ComponentFixture<ReimbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
