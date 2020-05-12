import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgatheringComponent } from './addgathering.component';

describe('AddgatheringComponent', () => {
  let component: AddgatheringComponent;
  let fixture: ComponentFixture<AddgatheringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgatheringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgatheringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
