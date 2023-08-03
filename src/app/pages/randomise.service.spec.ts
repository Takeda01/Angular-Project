import { TestBed } from '@angular/core/testing';

import { RandomiseService } from './randomise.service';

describe('RandomiseService', () => {
  let service: RandomiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
