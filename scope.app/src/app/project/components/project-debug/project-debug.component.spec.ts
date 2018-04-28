import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDebugComponent } from './project-debug.component';

describe('ProjectDebugComponent', () => {
  let component: ProjectDebugComponent;
  let fixture: ComponentFixture<ProjectDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
