import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` <button (click)="display()">Click Me</button>`
})
export class AppComponent {
  display() 
  {   
		var num:number = -5
		if (num > 0) { 
		console.log("number is positive") 
		}
		else
		{
		console.log("number is not positive") 
		}
  }
}
