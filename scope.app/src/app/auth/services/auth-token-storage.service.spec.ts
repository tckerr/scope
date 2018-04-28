import { TestBed, inject } from '@angular/core/testing';

import { AuthTokenStorage } from './auth-token-storage.service';

describe('AuthTokenStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTokenStorage]
    });
  });

  it('should be created', inject([AuthTokenStorage], (service: AuthTokenStorage) => {
    expect(service).toBeTruthy();
  }));
});
