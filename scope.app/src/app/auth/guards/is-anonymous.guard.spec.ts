import { TestBed, async, inject } from '@angular/core/testing';

import { IsAnonymousGuard } from './is-anonymous.guard';

describe('IsAnonymousGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAnonymousGuard]
    });
  });

  it('should ...', inject([IsAnonymousGuard], (guard: IsAnonymousGuard) => {
    expect(guard).toBeTruthy();
  }));
});
