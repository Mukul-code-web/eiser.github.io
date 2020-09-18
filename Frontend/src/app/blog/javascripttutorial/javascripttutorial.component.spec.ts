import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascripttutorialComponent } from './javascripttutorial.component';

describe('JavascripttutorialComponent', () => {
  let component: JavascripttutorialComponent;
  let fixture: ComponentFixture<JavascripttutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascripttutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascripttutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
