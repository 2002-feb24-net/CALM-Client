import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { UserService } from 'src/app/services/user.service';
import Gathering from '../../models/Gathering';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-addgathering',
  templateUrl: './addgathering.component.html'
})
export class AddgatheringComponent implements OnInit {
  cities: Array<string>;
value: string;
Gathering: Gathering[] = [];
error: string | undefined; // error handling implementation
submitted = false;
boolval: boolean;
  CreateGatheringForm = this.formBuilder.group({
    text: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private router: Router,  private CookieService: CookieService,
     private eventApi:EventsService,
     private userApi:UserService) { }

  ngOnInit(){
    this.refresh()
    
    this.CreateGatheringForm = this.formBuilder.group({
      title: ['', Validators.required],
      occurrenceData: ['', Validators.required],
      details: ['', Validators.required],
   isEvent:['']
  });
  }
  get f() { return this.CreateGatheringForm.controls; }

  onCitySelect(event) {
    this.value= event.target.value;
    console.log(this.value)
}

refresh(){
  return this.userApi.refreshMap()
  .then(
    cities => {
      this.cities= cities;
      console.log(this.cities)
    })

}

CreateGathering() {
  this.submitted = true;
  if(this.CreateGatheringForm.get('isEvent')?.value == "true"){
   this.boolval = true
  }
  else{
    this.boolval = false
  }
  /**
   * User form containing property values from API
   */
  const newE: Gathering = {
    title: this.CreateGatheringForm.get('title').value,
    occurrenceData: this.CreateGatheringForm.get('occurrenceData')?.value,
    details: this.CreateGatheringForm.get('details')?.value,  
    city:  this.value,
    isEvent: this.boolval,
  
  };
  console.log(this.CreateGatheringForm.get('isEvent')?.value)
console.log(newE)

  this.eventApi.CreateGathering(newE) // creates new user
    .then(
      Gethering => {
        if (this.error) {

         this.toastr.error('Error occurred', 'Error');


        } else {
          this.toastr.info('Gathering Created', 'Created');

          this.Gathering.unshift(Gethering); //inserts new element at start of array
          this.resetError(); //clears error message
        }
      },
      error => this.handleError(error) //handles error message
    );


}
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    this.error = `An error occurred: ${error.error.message}`; //in the event of a network error. Add error message.
  } else {
    this.error = `Backend returned code ${error.status}, body was: ${error.error}`; //If the response status code was an error then display said error
  }
}
resetError() {
  this.error = undefined; //clears error message
}

}
