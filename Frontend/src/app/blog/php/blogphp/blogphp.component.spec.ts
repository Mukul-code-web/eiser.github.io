import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogphpComponent } from './blogphp.component';

describe('BlogphpComponent', () => {
  let component: BlogphpComponent;
  let fixture: ComponentFixture<BlogphpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogphpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
