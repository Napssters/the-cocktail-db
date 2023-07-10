import { TestBed } from '@angular/core/testing';

import { FilterCocktailsService } from './filter-cocktails.service';

describe('FilterCocktailsService', () => {
  let service: FilterCocktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
