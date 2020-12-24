import { TestBed } from '@angular/core/testing';

import { RoutingContextService } from './routing-context.service';

describe('RoutingContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingContextService = TestBed.get(RoutingContextService);
    expect(service).toBeTruthy();
  });
});
