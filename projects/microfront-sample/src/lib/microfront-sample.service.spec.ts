import { TestBed } from '@angular/core/testing';

import { MicrofrontSampleService } from './microfront-sample.service';

describe('MicrofrontSampleService', () => {
  let service: MicrofrontSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrofrontSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
