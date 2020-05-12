import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    declarations: [ EventsComponent ],
    providers: [FormBuilder, HttpClient, HttpHandler],
    imports: [RouterTestingModule, FormsModule, ToastrModule.forRoot()],
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
  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });


});
