import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGraphWidgetComponent } from './portfolio-graph-widget.component';

describe('PortfolioGraphWidgetComponent', () => {
  let component: PortfolioGraphWidgetComponent;
  let fixture: ComponentFixture<PortfolioGraphWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGraphWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGraphWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
