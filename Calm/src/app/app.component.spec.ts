 import { TestBed, async } from '@angular/core/testing';
 import { RouterTestingModule } from '@angular/router/testing';
 import { AppComponent } from './app.component';
/**
 * test description for app component
 */
 describe('AppComponent', () => {
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       imports: [
         RouterTestingModule
       ],
       declarations: [
         AppComponent
       ],
     }).compileComponents();
   }));
/**
 * the expected results of app component set to be true
 */
   it('should create the app', () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app).toBeTruthy();
   });
/**
 * app component tittle set to be Calm
 */
   it(`should have as title 'Calm'`, () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app.title).toEqual('Calm');
   });

   afterEach(() => {
    TestBed.resetTestingModule();
  });


});
