import { Component, OnInit } from '@angular/core';
/**
 * Question component
 */
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
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
    // for loop statement that iterates through questions presented to the client based on choices.
     for(let i=1; i<=6; i++ )
     {
    var element= <HTMLInputElement> document.getElementById(`${i}`);
     if (element.checked) {  // conditional statement
      document.getElementById('p').innerText += element.value;
      }
     }
  }

}
