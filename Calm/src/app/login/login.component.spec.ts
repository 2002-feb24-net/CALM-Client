import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
      declarations: [ LoginComponent ]
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
});
