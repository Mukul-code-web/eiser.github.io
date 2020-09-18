import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceorderdetailsComponent } from './placeorderdetails.component';

describe('PlaceorderdetailsComponent', () => {
  let component: PlaceorderdetailsComponent;
  let fixture: ComponentFixture<PlaceorderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceorderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
