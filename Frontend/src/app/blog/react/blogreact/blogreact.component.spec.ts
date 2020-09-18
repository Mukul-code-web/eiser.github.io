import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogreactComponent } from './blogreact.component';

describe('BlogreactComponent', () => {
  let component: BlogreactComponent;
  let fixture: ComponentFixture<BlogreactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogreactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
