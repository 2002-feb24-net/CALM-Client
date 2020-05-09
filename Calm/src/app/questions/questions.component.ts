import { Component, OnInit } from '@angular/core';
/**
 * Question component
 */
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {
/**
 * @ignore
 */
  constructor() { }
/**
 * @ignore
 */
  ngOnInit(): void {
  }
  Submit() {
/**
 * for loop that gets the user input element by id which outputs a value. 
 */
      document.getElementById('p').innerText= ("Recommended groups: ")

     for(let i=1; i<=6; i++ )
     {
    var element= <HTMLInputElement> document.getElementById(`${i}`);
     if (element.checked) {
      document.getElementById('p').innerText += element.value;
      }
     }
  }

}
