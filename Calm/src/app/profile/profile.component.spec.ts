import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [FormBuilder,HttpClient, HttpHandler],
      imports: [ ToastrModule.forRoot()]
    })
    .compileComponents();
  }));

beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.updateUserForm.valid).toBeFalsy();
  });
  it('username field validity', () => {
    let username = component.updateUserForm.controls['username'];
    expect(username.valid).toBeFalsy();
  });
  it('fName field validity', () => {
    let fName = component.updateUserForm.controls['fName'];
    expect(fName.valid).toBeFalsy();
  });
  it('lName field validity', () => {
    let lName = component.updateUserForm.controls['lName'];
    expect(lName.valid).toBeFalsy();
  });
  it('password field validity', () => {
    let password = component.updateUserForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });


});
