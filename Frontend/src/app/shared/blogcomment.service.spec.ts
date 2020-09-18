import { TestBed } from '@angular/core/testing';

import { BlogcommentService } from './blogcomment.service';

describe('BlogcommentService', () => {
  let service: BlogcommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogcommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
