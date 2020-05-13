import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdmineditComponent } from './adminedit.component';

describe('AdmineditComponent', () => {
  let component: AdmineditComponent;
  let fixture: ComponentFixture<AdmineditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditComponent ],
      providers: [FormBuilder, HttpClient, HttpHandler],
      imports: [RouterTestingModule, FormsModule, ToastrModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should create admin ', () => {
    component.CreateAdmin();
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.CreateAdminForm.valid).toBeFalsy();
  });
  it('fName field validity', () => {
    let fName = component.CreateAdminForm.controls['fName'];
    expect(fName.valid).toBeFalsy();
  });
  it('lName field validity', () => {
    let lName = component.CreateAdminForm.controls['lName'];
    expect(lName.valid).toBeFalsy();
  });
  it('username field validity', () => {
    let username = component.CreateAdminForm.controls['username'];
    expect(username.valid).toBeFalsy();
  });
  it('password field validity', () => {
    let password = component.CreateAdminForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });


});
