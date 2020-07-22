import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsBoxWidgetComponent } from './notifications-box-widget.component';

describe('NotificationsBoxWidgetComponent', () => {
  let component: NotificationsBoxWidgetComponent;
  let fixture: ComponentFixture<NotificationsBoxWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsBoxWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsBoxWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
