import { TestBed, inject } from '@angular/core/testing';

import { GraphFactoryService } from './graph-factory.service';

describe('GraphFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphFactoryService]
    });
  });

  it('should be created', inject([GraphFactoryService], (service: GraphFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
