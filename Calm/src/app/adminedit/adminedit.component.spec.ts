import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdmineditComponent } from './adminedit.component';

describe('AdmineditComponent', () => {
  let component: AdmineditComponent;
  let fixture: ComponentFixture<AdmineditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditComponent ],
      providers: [FormBuilder, HttpClient, HttpHandler],
      imports: [RouterTestingModule, FormsModule, ToastrModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditComponent);
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
  it('should create admin ', () => {
    component.CreateAdmin();
    expect(component).toBeTruthy();
  });
 
});
