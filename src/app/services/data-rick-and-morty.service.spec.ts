import { TestBed } from '@angular/core/testing';

import { DataRickAndMortyService } from './data-rick-and-morty.service';

describe('DataRickAndMortyService', () => {
  let service: DataRickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
