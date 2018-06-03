import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFactoryComponent } from './graph-factory.component';

describe('GraphFactoryComponent', () => {
  let component: GraphFactoryComponent;
  let fixture: ComponentFixture<GraphFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
