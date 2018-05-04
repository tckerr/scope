import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsSelectListComponent } from './organizations-select-list.component';

describe('OrganizationsSelectListComponent', () => {
  let component: OrganizationsSelectListComponent;
  let fixture: ComponentFixture<OrganizationsSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
