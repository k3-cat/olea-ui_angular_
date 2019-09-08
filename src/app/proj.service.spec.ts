import { TestBed } from '@angular/core/testing';

import { ProjService } from './proj.service';

describe('ProjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjService = TestBed.get(ProjService);
    expect(service).toBeTruthy();
  });
});
