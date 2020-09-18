import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltutorialComponent } from './htmltutorial.component';

describe('HtmltutorialComponent', () => {
  let component: HtmltutorialComponent;
  let fixture: ComponentFixture<HtmltutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmltutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
