import { TestBed } from '@angular/core/testing';

import { ListOthersService } from './list-others.service';

describe('ListOthersService', () => {
  let service: ListOthersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOthersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
