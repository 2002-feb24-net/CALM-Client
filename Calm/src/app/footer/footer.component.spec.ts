import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * importing footer Component from footer.component.
 */
import { FooterComponent } from './footer.component';
/**
 * footer component description.
 */
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
/**
 * Configuring test ngModule that declares footer component.
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));
/**
 * fixture instance that returns detects changes in the footer component.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * expected results set to return true each time changes are made
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
