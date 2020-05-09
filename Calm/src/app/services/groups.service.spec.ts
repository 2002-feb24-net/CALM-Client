import { TestBed } from '@angular/core/testing';
/**
 * importing group services
 */
import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  let service: GroupsService;
/**
 * auto generated test method for group service.
 */
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsService);
  });
/**
 * expected results for group service set to be true.
 */
  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
