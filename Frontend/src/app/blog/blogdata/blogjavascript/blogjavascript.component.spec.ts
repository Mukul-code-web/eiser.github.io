import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogjavascriptComponent } from './blogjavascript.component';

describe('BlogjavascriptComponent', () => {
  let component: BlogjavascriptComponent;
  let fixture: ComponentFixture<BlogjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
