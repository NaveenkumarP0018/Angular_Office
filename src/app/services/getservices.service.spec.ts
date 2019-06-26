import { TestBed } from '@angular/core/testing';

import { GetservicesService } from './getservices.service';

describe('GetservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetservicesService = TestBed.get(GetservicesService);
    expect(service).toBeTruthy();
  });
});
