import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRgistrationComponent } from './view-rgistration.component';

describe('ViewRgistrationComponent', () => {
  let component: ViewRgistrationComponent;
  let fixture: ComponentFixture<ViewRgistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRgistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
