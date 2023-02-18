import { TestBed } from '@angular/core/testing';

import { DataHeaderService } from './data-header.service';

describe('DataHeaderService', () => {
  let service: DataHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
