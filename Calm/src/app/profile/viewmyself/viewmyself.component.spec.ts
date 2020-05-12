import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyselfComponent } from './viewmyself.component';

describe('ViewmyselfComponent', () => {
  let component: ViewmyselfComponent;
  let fixture: ComponentFixture<ViewmyselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmyselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
