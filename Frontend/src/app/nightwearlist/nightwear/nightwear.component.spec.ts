import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightwearComponent } from './nightwear.component';

describe('NightwearComponent', () => {
  let component: NightwearComponent;
  let fixture: ComponentFixture<NightwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
