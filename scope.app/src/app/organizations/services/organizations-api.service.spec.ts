import { TestBed, inject } from '@angular/core/testing';

import { OrganizationsApi } from './organizations-api.service';

describe('OrganizationsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationsApi]
    });
  });

  it('should be created', inject([OrganizationsApi], (service: OrganizationsApi) => {
    expect(service).toBeTruthy();
  }));
});
