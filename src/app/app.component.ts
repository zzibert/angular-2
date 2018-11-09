import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! test test test';
  name = 'Net Ninja';
  ninja = {
    name: 'Ryu',
    belt: "Red"
  }
  yell(e){
    console.log(e);
    alert("I am Yelling");
  }
}
