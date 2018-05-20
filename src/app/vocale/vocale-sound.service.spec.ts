import { TestBed, inject } from '@angular/core/testing';

import { VocaleSoundService } from './vocale-sound.service';

describe('VocaleSoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocaleSoundService]
    });
  });

  it('should be created', inject([VocaleSoundService], (service: VocaleSoundService) => {
    expect(service).toBeTruthy();
  }));
});
