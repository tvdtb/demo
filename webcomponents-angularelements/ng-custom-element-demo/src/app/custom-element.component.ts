import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  template: `
    <div class="custom" *ngIf="show" style="border: 1px solid red;">
      
      <button (click)="doSomethingInternal()" type="button" class="close">
        do something
      </button>
      <br/>
      <p *ngFor="let c of content">
      {{ c }}
      </p>
    </div>
  `,
  styles: ['.alert {max-width: 500px; margin: 0 auto;}', 'button:focus {outline:none}','button:hover {background: beige}']
})
export class CustomButtonComponent  {
  content:string[] = [];
  
  @Output() importantEvent = new EventEmitter();

  show = true;

  @Input()
  set message(msg: string) {
    console.log(`Message changed: ${msg}`);
    this.content.push(`message: ${msg}`);
  }

  @Input()
  doSomethingExternal(msg: string) {
    console.log(`doSomethingExternal: ${msg}`);
  }


  public doSomethingInternal() {
    console.info(`doSomethingInternal`)
    this.content.push(`doSomethingInternal`);
    this.importantEvent.emit({ msg: 'something happened'});
  }
}
