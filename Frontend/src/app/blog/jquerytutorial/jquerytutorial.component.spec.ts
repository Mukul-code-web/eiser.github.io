import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JquerytutorialComponent } from './jquerytutorial.component';

describe('JquerytutorialComponent', () => {
  let component: JquerytutorialComponent;
  let fixture: ComponentFixture<JquerytutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JquerytutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JquerytutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
