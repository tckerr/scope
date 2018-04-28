import { TestBed, inject } from '@angular/core/testing';

import { AuthenticatedApi } from './authenticated-api.service';

describe('AuthenticatedApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedApi]
    });
  });

  it('should be created', inject([AuthenticatedApi], (service: AuthenticatedApi) => {
    expect(service).toBeTruthy();
  }));
});
