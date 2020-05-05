import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
      declarations: [ RegisterComponent ]
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
});
