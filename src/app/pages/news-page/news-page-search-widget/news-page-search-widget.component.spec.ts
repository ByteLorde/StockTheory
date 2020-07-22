import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageSearchWidgetComponent } from './news-page-search-widget.component';

describe('NewsPageSearchWidgetComponent', () => {
  let component: NewsPageSearchWidgetComponent;
  let fixture: ComponentFixture<NewsPageSearchWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPageSearchWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageSearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
