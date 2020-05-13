import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { AddgatheringComponent } from './addgathering.component';


describe('AddgatheringComponent', () => {
  let component: AddgatheringComponent;
  let fixture: ComponentFixture<AddgatheringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgatheringComponent ],
      providers: [FormBuilder, HttpClient, HttpHandler],
      imports: [RouterTestingModule, ToastrModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgatheringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create gathering', () => {
    component.CreateGathering();
    expect(component).toBeTruthy();
  });

  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  // it('should refresh user list', () => {
  //   component.refresh();
  //   expect(component).toBeTruthy();
  // });
  it('form invalid when empty', () => {
    expect(component.CreateGatheringForm.valid).toBeFalsy();
  });

});
