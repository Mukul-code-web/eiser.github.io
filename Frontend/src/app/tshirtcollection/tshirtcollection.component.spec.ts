import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtcollectionComponent } from './tshirtcollection.component';

describe('TshirtcollectionComponent', () => {
  let component: TshirtcollectionComponent;
  let fixture: ComponentFixture<TshirtcollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtcollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
