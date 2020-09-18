import { TestBed } from '@angular/core/testing';

import { ProfileeditService } from './profileedit.service';

describe('ProfileeditService', () => {
  let service: ProfileeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
