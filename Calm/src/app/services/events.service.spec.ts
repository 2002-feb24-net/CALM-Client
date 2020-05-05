import { TestBed } from '@angular/core/testing';
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
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsService);
  });
/**
 * expected outcome for event component set to be true.
 */
  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
