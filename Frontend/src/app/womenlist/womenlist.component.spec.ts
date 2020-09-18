import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenlistComponent } from './womenlist.component';

describe('WomenlistComponent', () => {
  let component: WomenlistComponent;
  let fixture: ComponentFixture<WomenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
