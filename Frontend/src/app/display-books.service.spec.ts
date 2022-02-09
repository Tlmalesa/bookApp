import { TestBed } from '@angular/core/testing';

import { DisplayBooksService } from './display-books.service';

describe('DisplayBooksService', () => {
  let service: DisplayBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
