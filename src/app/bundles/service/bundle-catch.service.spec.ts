import { TestBed } from '@angular/core/testing';

import { BundleCatchService } from './bundle-catch.service';

describe('BundleCatchService', () => {
  let service: BundleCatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundleCatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
