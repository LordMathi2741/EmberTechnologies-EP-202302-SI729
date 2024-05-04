import { TestBed } from '@angular/core/testing';

import { ProductCatchService } from './product-catch.service';

describe('ProductCatchService', () => {
  let service: ProductCatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
