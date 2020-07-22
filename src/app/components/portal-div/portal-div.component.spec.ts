import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDivComponent } from './portal-div.component';

describe('PortalDivComponent', () => {
  let component: PortalDivComponent;
  let fixture: ComponentFixture<PortalDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
