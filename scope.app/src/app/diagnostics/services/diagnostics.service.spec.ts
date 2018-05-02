import { TestBed, inject } from '@angular/core/testing';

import { DiagnosticsApi } from './diagnostics-api.service';

describe('DiagnosticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagnosticsApi]
    });
  });

  it('should be created', inject([DiagnosticsApi], (service: DiagnosticsApi) => {
    expect(service).toBeTruthy();
  }));
});
