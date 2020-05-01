import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Submit() {
    
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
