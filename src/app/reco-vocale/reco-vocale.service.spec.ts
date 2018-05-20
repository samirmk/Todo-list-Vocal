import { TestBed, inject } from '@angular/core/testing';

import { RecoVocaleService } from './reco-vocale.service';

describe('RecoVocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecoVocaleService]
    });
  });

  it('should be created', inject([RecoVocaleService], (service: RecoVocaleService) => {
    expect(service).toBeTruthy();
  }));
});
