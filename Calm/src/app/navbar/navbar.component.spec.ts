import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * imports Navigation bar component
 */
import { NavbarComponent } from './navbar.component';
/**
 * navigation bar description. 
 */
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
/**
 * navigation bar declarations compiles
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));
/**
 * fixture component detects changes in Navigation bar component.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * Navigation bar component set to be true.
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
