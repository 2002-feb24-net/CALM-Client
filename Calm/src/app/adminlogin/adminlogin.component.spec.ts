import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder, Validators } from '@angular/forms';
import { AdminloginComponent } from './adminlogin.component';
import { Router } from '@angular/router';

describe('AdminloginComponent', () => {
  let component: AdminloginComponent;
  let fixture: ComponentFixture<AdminloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, Router],
      declarations: [ AdminloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
