import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatlistComponent } from './coatlist.component';

describe('CoatlistComponent', () => {
  let component: CoatlistComponent;
  let fixture: ComponentFixture<CoatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
