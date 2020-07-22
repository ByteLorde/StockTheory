import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterGroupItemComponent } from './page-filter-group-item.component';

describe('PageFilterGroupItemComponent', () => {
  let component: PageFilterGroupItemComponent;
  let fixture: ComponentFixture<PageFilterGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFilterGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilterGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
