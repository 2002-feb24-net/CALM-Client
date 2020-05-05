import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
      declarations: [ SupportGroupsComponent ]
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
});
