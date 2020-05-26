import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `
    <div class="alert alert-{{ type }} alert-dismissible" *ngIf="show">
      {{ content }}
      <button (click)="doSomethingInternal()" type="button" class="close">
        <span >&hearts;</span>
      </button>
    </div>
  `,
  styles: ['.alert {max-width: 500px; margin: 0 auto;}', 'button:focus {outline:none}','button:hover {background: beige}']
})
export class CustomButtonComponent  {
  @Input() content = 'Default';
  @Input() type = 'success';
  @Output() closed = new EventEmitter();

  show = true;

  public doSomethingInternal() {
    if (this.type == "success"){
      this.type = "info"
      this.content = "AngularElement Info"
    } else if (this.type == "info"){
      console.log("test")
      this.type = "success";
      this.content = "AngularElement Success"
    }
  }
}
