import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-element',
  templateUrl: './some-element.html'
})
export class SomeElementComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  public doSomething() {
    console.log("doSomething called!")
    this.count ++;
  }
}
