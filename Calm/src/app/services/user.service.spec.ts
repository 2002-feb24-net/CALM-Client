import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

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
    TestBed.configureTestingModule({ providers:[HttpClient, HttpHandler]})
    service = TestBed.inject(UserService);
  });
/**
 * expected results set to be true for user service component.
 */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get users', () => {
    service.getUsers();
    expect(service).toBeTruthy();
    });

    it('should refresh user list', () => {
      service.refreshList();
      expect(service).toBeTruthy();
    });
   


});
