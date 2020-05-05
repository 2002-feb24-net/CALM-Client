import { TestBed } from '@angular/core/testing';
/**
 * imports user service
 */
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
/**
 * auto generated test for injectable user service
 */
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserService);
  });
/**
 * expected results set to be true for user service component.
 */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
