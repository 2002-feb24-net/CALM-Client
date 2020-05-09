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
});
