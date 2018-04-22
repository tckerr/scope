import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionNumberComponent } from './version-number.component';

describe('VersionNumberComponent', () => {
  let component: VersionNumberComponent;
  let fixture: ComponentFixture<VersionNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
