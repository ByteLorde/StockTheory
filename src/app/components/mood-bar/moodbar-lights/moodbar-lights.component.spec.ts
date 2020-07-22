import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodbarLightsComponent } from './moodbar-lights.component';

describe('MoodbarLightsComponent', () => {
  let component: MoodbarLightsComponent;
  let fixture: ComponentFixture<MoodbarLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodbarLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodbarLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
