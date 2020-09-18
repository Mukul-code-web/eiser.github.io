import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhptutorialComponent } from './phptutorial.component';

describe('PhptutorialComponent', () => {
  let component: PhptutorialComponent;
  let fixture: ComponentFixture<PhptutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhptutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhptutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
