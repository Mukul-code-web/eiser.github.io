import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EisercouponsComponent } from './eisercoupons.component';

describe('EisercouponsComponent', () => {
  let component: EisercouponsComponent;
  let fixture: ComponentFixture<EisercouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisercouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EisercouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
