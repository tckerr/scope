import { TestBed, inject } from '@angular/core/testing';

import { AuthApi } from './auth-api.service';

describe('AuthApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthApi]
    });
  });

  it('should ...', inject([AuthApi], (service: AuthApi) => {
    expect(service).toBeTruthy();
  }));
});
