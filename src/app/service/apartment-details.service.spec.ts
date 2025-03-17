import { TestBed } from '@angular/core/testing';

import { ApartmentDetailsService } from './apartment-details.service';

describe('ApartmentDetailsService', () => {
  let service: ApartmentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
