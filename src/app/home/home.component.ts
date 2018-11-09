import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = 'this is the home title'
  myString = 'i like pujo!'

  alertMe(val){
    alert(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
