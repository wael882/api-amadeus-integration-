import { TestBed } from '@angular/core/testing';

import { Amadeus } from './amadeus';

describe('Amadeus', () => {
  let service: Amadeus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Amadeus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
