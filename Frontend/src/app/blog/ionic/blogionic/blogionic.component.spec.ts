import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogionicComponent } from './blogionic.component';

describe('BlogionicComponent', () => {
  let component: BlogionicComponent;
  let fixture: ComponentFixture<BlogionicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogionicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogionicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
