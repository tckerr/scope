import { TestBed, inject } from '@angular/core/testing';

import { DiagnosticsService } from './diagnostics.service';

describe('DiagnosticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagnosticsService]
    });
  });

  it('should be created', inject([DiagnosticsService], (service: DiagnosticsService) => {
    expect(service).toBeTruthy();
  }));
});
