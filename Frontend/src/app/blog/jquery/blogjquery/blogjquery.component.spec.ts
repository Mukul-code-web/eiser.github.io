import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogjqueryComponent } from './blogjquery.component';

describe('BlogjqueryComponent', () => {
  let component: BlogjqueryComponent;
  let fixture: ComponentFixture<BlogjqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogjqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogjqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
