import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantlistComponent } from './pantlist.component';

describe('PantlistComponent', () => {
  let component: PantlistComponent;
  let fixture: ComponentFixture<PantlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
