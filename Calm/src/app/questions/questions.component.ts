import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Submit(f: NgForm) {
    // let element = <HTMLInputElement> document.getElementById("q1");  
    // let element2 = <HTMLInputElement> document.getElementById("q2"); 
    // let element3 = <HTMLInputElement> document.getElementById("q3");
    // let element4 = <HTMLInputElement> document.getElementById("q4");
    // let element5 = <HTMLInputElement> document.getElementById("q5"); 
    // let element6 = <HTMLInputElement> document.getElementById("q6");        
    // if (element.checked) {
      document.getElementById('p').innerText= ("Recommended groups: ")
    
     for(let i=1; i<=6; i++ )
     {
    var element= <HTMLInputElement> document.getElementById(`${i}`);
     console.log(element); 
     if (element.checked) {
      document.getElementById('p').innerText += element.value;
      }
     }
  }

}
