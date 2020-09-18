import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressjstutorialComponent } from './expressjstutorial.component';

describe('ExpressjstutorialComponent', () => {
  let component: ExpressjstutorialComponent;
  let fixture: ComponentFixture<ExpressjstutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressjstutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressjstutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
