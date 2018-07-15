import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenerPageComponent } from './screener-page.component';

describe('ScreenerPageComponent', () => {
  let component: ScreenerPageComponent;
  let fixture: ComponentFixture<ScreenerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
