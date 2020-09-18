import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogangularComponent } from './blogangular.component';

describe('BlogangularComponent', () => {
  let component: BlogangularComponent;
  let fixture: ComponentFixture<BlogangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
