import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPageTableComponent } from './market-page-table.component';

describe('MarketPageTableComponent', () => {
  let component: MarketPageTableComponent;
  let fixture: ComponentFixture<MarketPageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketPageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
