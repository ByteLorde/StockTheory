import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterGroupComponent } from './page-filter-group.component';

describe('PageFilterGroupComponent', () => {
  let component: PageFilterGroupComponent;
  let fixture: ComponentFixture<PageFilterGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFilterGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
