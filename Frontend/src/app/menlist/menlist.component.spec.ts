import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenlistComponent } from './menlist.component';

describe('MenlistComponent', () => {
  let component: MenlistComponent;
  let fixture: ComponentFixture<MenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
