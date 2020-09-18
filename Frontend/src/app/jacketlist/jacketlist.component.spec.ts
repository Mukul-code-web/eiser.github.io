import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketlistComponent } from './jacketlist.component';

describe('JacketlistComponent', () => {
  let component: JacketlistComponent;
  let fixture: ComponentFixture<JacketlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacketlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
