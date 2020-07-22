import { TestBed } from '@angular/core/testing';

import { PageFilterService } from './page-filter.service';

describe('PageFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageFilterService = TestBed.get(PageFilterService);
    expect(service).toBeTruthy();
  });
});
