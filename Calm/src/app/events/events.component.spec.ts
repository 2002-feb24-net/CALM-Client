import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * imports event component
 */
import { EventsComponent } from './events.component';
/**
 * event component description and its type
 */
describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
/**
 * returns or runs multiple events at once during declarations
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsComponent ]
    })
    .compileComponents();
  }));
/**
 * events created return fixture detect changes.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * even component expected to results to be true
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
