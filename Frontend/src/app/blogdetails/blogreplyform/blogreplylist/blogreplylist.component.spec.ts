import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogreplylistComponent } from './blogreplylist.component';

describe('BlogreplylistComponent', () => {
  let component: BlogreplylistComponent;
  let fixture: ComponentFixture<BlogreplylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogreplylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogreplylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
