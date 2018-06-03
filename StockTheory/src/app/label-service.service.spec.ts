import { TestBed, inject } from '@angular/core/testing';

import { LabelServiceService } from './label-service.service';

describe('LabelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelServiceService]
    });
  });

  it('should be created', inject([LabelServiceService], (service: LabelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
