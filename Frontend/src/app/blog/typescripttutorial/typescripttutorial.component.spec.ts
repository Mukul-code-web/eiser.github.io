import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescripttutorialComponent } from './typescripttutorial.component';

describe('TypescripttutorialComponent', () => {
  let component: TypescripttutorialComponent;
  let fixture: ComponentFixture<TypescripttutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescripttutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescripttutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
