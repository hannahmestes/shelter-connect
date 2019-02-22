import { TestBed } from '@angular/core/testing';

import { ShelterService } from './shelter.service';

describe('ShelterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShelterService = TestBed.get(ShelterService);
    expect(service).toBeTruthy();
  });
});
