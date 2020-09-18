import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcategoryComponent } from './shopcategory.component';

describe('ShopcategoryComponent', () => {
  let component: ShopcategoryComponent;
  let fixture: ComponentFixture<ShopcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
