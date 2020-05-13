import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserviewComponent } from './userview.component';

describe('UserviewComponent', () => {
  let component: UserviewComponent;
  let fixture: ComponentFixture<UserviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserviewComponent ],
      providers: [FormBuilder, HttpClient, HttpHandler],
      imports: [RouterTestingModule, FormsModule, ToastrModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should do on initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

});
