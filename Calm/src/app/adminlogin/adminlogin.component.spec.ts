import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/**
 * imports form builder, andminlogin component, and router.
 */
import { FormBuilder } from '@angular/forms';
import { AdminloginComponent } from './adminlogin.component'
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
    declarations: [ AdminloginComponent ],
    providers: [FormBuilder, HttpClient, HttpHandler],
    imports: [RouterTestingModule, FormsModule, ToastrModule.forRoot()],
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
  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.UserForm.valid).toBeFalsy();
  });
  
  afterEach(() => {
    TestBed.resetTestingModule();
  });

});
