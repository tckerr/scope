import { TestBed, inject } from '@angular/core/testing';

import { ProjectsApi } from './projects-api';

describe('ProjectsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsApi]
    });
  });

  it('should be created', inject([ProjectsApi], (service: ProjectsApi) => {
    expect(service).toBeTruthy();
  }));
});
