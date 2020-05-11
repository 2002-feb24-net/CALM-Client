import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * imports questions component
 */
import { QuestionsComponent } from './questions.component';
/**
 * question desciption message
 */
describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;
/**
 * method that enables multiple questions to be answered
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsComponent ]
    })
    .compileComponents();
  }));
/**
 * method that detect changes to each question component
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * questions should be return true as expected.
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
