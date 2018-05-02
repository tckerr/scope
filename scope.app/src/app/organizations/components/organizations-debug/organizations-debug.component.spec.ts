import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsDebugComponent } from './organizations-debug.component';

describe('OrganizationsDebugComponent', () => {
  let component: OrganizationsDebugComponent;
  let fixture: ComponentFixture<OrganizationsDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
