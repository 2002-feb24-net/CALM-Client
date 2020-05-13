import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
/**
 * imports support group component
 */
import { SupportGroupsComponent } from './support-groups.component';
/**
 * describes Supports group components
 */
describe('SupportGroupsComponent', () => {
  let component: SupportGroupsComponent;
  let fixture: ComponentFixture<SupportGroupsComponent>;
/**
 * declarations statement for support group component
 */
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ SupportGroupsComponent ],
    providers: [FormBuilder, HttpClient, HttpHandler],
    imports: [ ToastrModule.forRoot()],
    })
    .compileComponents();
  }));
/**
 * generated method that detects changes in support groups component.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(SupportGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * support group set to be true.
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
/**
 * test method for OnInit method
 */
  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  // it('should add user', () => {
  //   component.AddUser();
  //   expect(component).toBeTruthy();
  // });
});
