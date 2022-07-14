import { TestBed } from '@angular/core/testing';

import { DatacomService } from './datacom.service';

describe('DatacomService', () => {
  let service: DatacomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
