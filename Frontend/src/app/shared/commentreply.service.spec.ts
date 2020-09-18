import { TestBed } from '@angular/core/testing';

import { CommentreplyService } from './commentreply.service';

describe('CommentreplyService', () => {
  let service: CommentreplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentreplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
