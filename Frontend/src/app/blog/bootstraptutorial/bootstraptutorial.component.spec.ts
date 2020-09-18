import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstraptutorialComponent } from './bootstraptutorial.component';

describe('BootstraptutorialComponent', () => {
  let component: BootstraptutorialComponent;
  let fixture: ComponentFixture<BootstraptutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstraptutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstraptutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
