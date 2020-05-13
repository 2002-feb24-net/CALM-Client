import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * imports data needed from Notfound component
 */
import { NotfoundComponent } from './notfound.component';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;
/**
 * generated method test for items notfound.
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundComponent ]
    })
    .compileComponents();
  }));
/**
 * generated method detects changes in component.
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  afterEach(() => {
    TestBed.resetTestingModule();
  });

});
