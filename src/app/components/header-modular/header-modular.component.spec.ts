import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModularComponent } from './header-modular.component';

describe('HeaderModularComponent', () => {
  let component: HeaderModularComponent;
  let fixture: ComponentFixture<HeaderModularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderModularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderModularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
