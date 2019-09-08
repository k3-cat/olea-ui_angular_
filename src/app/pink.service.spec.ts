import { TestBed } from '@angular/core/testing';

import { PinkService } from './pink.service';

describe('PinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinkService = TestBed.get(PinkService);
    expect(service).toBeTruthy();
  });
});
