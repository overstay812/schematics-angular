import { TestBed } from '@angular/core/testing';

import { AdditionalLibraryService } from './additional-library.service';

describe('AdditionalLibraryService', () => {
  let service: AdditionalLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
