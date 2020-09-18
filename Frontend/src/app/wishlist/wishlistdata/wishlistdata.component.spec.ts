import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistdataComponent } from './wishlistdata.component';

describe('WishlistdataComponent', () => {
  let component: WishlistdataComponent;
  let fixture: ComponentFixture<WishlistdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
