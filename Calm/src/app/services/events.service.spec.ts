import { TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule, } from '@angular/forms';
/**
 * importing event service
 */
import { EventsService } from './events.service';
import { NgModule } from '@angular/core';


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
});
