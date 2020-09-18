import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbtutorialComponent } from './mongodbtutorial.component';

describe('MongodbtutorialComponent', () => {
  let component: MongodbtutorialComponent;
  let fixture: ComponentFixture<MongodbtutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongodbtutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodbtutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
