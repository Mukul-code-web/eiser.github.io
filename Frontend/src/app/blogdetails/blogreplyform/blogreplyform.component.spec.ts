import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogreplyformComponent } from './blogreplyform.component';

describe('BlogreplyformComponent', () => {
  let component: BlogreplyformComponent;
  let fixture: ComponentFixture<BlogreplyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogreplyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogreplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
