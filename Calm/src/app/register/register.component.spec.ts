import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/**
 * imports register component
 */
import { RegisterComponent } from './register.component';
/**
 * description method for register component.
 */
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
/**
 * declarations in register component.
 */
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ RegisterComponent ],
    providers: [FormBuilder, HttpClient, HttpHandler],
    imports: [RouterTestingModule,  ToastrModule.forRoot()],
    })
    .compileComponents();
  }));
/**
 * detects changes in login component.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * expected result to be true
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should create user', () => {
    component.CreateUser();
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.CreateUserForm.valid).toBeFalsy();
  });
  it('lName field validity', () => {
    let lName = component.CreateUserForm.controls['lName'];
    expect(lName.valid).toBeFalsy();

    let errors = {};
    errors = lName.errors || {};
    expect(errors['required']).toBeTruthy();

    // lName.setValue("test");
    // errors = lName.errors || {};
    // expect(errors['pattern']).toBeTruthy();
  });
  it('fName field validity', () => {
    let fName = component.CreateUserForm.controls['fName'];
    expect(fName.valid).toBeFalsy();
  });
  it('city field validity', () => {
    let city = component.CreateUserForm.controls['city'];
    expect(city.valid).toBeFalsy();

    let errors = {};
    errors = city.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('username fied validity', () => {
    let username = component.CreateUserForm.controls['username'];
    expect(username.valid).toBeFalsy();
  });
  it('password fied validity', () => {
    let password = component.CreateUserForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });

});
