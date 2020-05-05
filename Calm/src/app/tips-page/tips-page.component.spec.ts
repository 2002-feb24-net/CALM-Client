import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * imports tips page compoent
 */
import { TipsPageComponent } from './tips-page.component';
/**
 * generated method that descripts the tips page component.
 */
describe('TipsPageComponent', () => {
  let component: TipsPageComponent;
  let fixture: ComponentFixture<TipsPageComponent>;
/**
 * test bed generated method taht declares tipspage component.
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsPageComponent ]
    })
    .compileComponents();
  }));
/**
 * generated method for tipspage component that detects changes.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(TipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * created tips page component set to be true. 
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
