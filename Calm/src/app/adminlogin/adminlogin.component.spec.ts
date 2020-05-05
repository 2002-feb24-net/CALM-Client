import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * imports form builder, andminlogin component, and router.
 */
import { FormBuilder, Validators } from '@angular/forms';
import { AdminloginComponent } from './adminlogin.component';
import { Router } from '@angular/router';
/**
 * admin login component description method.
 */
describe('AdminloginComponent', () => {
  let component: AdminloginComponent;
  let fixture: ComponentFixture<AdminloginComponent>;
/**
 * test method for admin login component.
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, Router],
      declarations: [ AdminloginComponent ]
    })
    .compileComponents();
  }));
/**
 * method that detects changes in admin login component.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * created results set to be true.
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
