import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersMenuItemComponent } from './members-menu-item.component';

describe('MembersMenuItemComponent', () => {
  let component: MembersMenuItemComponent;
  let fixture: ComponentFixture<MembersMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
