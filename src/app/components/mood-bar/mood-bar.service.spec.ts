import { TestBed } from '@angular/core/testing';

import { MoodBarService } from './mood-bar.service';

describe('MoodBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoodBarService = TestBed.get(MoodBarService);
    expect(service).toBeTruthy();
  });
});
