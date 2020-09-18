import { TestBed } from '@angular/core/testing';

import { MessangersService } from './messangers.service';

describe('MessangersService', () => {
  let service: MessangersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessangersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
