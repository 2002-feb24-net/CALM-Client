
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/**
 * importing login.component
 */
import { LoginComponent } from './login.component';
/**
 * login desciption for login component.
 */
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
/**
 * declarations for login component that returns compiled components
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [FormBuilder, HttpClient, HttpHandler],
      imports: [RouterTestingModule, FormsModule, ToastrModule.forRoot()],

    })
    .compileComponents();
  }));
/**
 * fixture component detect changes in login
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * login component returns true/
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.UserForm.valid).toBeFalsy();
  });
  // it('isAdmin field false', () => {
  //   let isAdmin = component.UserForm.controls['isAdmin'];
  //   expect(isAdmin.valid).toBeFalse();
  // });

});
