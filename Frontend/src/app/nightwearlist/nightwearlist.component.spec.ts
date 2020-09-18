import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightwearlistComponent } from './nightwearlist.component';

describe('NightwearlistComponent', () => {
  let component: NightwearlistComponent;
  let fixture: ComponentFixture<NightwearlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightwearlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightwearlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
