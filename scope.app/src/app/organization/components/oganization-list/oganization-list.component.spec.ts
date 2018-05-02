import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OganizationListComponent } from './oganization-list.component';

describe('OganizationListComponent', () => {
  let component: OganizationListComponent;
  let fixture: ComponentFixture<OganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OganizationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
