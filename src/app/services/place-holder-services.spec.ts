import { TestBed } from '@angular/core/testing';

import { PlaceHolderServices } from './place-holder-services';

describe('PlaceHolderServices', () => {
  let service: PlaceHolderServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceHolderServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
