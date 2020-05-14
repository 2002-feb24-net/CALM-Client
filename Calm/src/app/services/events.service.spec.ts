import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
/**
 * importing event service
 */
import { EventsService } from './events.service';


describe('EventsService', () => {
  let service: EventsService;

/**
 * test method for event service
 */
  beforeEach(() => {
    TestBed.configureTestingModule({

      providers: [ HttpClient, HttpHandler ],
      imports: [RouterTestingModule, ToastrModule.forRoot()],

    })
    service = TestBed.inject(EventsService);
  });
/**
 * expected outcome for event component set to be true.
 */
  it('should be created', () => {
  expect(service).toBeTruthy();
  });
  it('should refresh events', () => {
    service.refreshevents();
    expect(service).toBeTruthy();
    });
    it('should refresh user groups', () => {
      service.refreshgroups();
      expect(service).toBeTruthy();
    });

    afterEach(() => {
      TestBed.resetTestingModule();
    });
  
});
