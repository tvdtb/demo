import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `
    <div class="alert alert-{{ type }} alert-dismissible" *ngIf="show">
      {{ content }}
      <button (click)="show = false; closed.emit()" type="button" class="close">
        <span >&times;</span>
      </button>
    </div>
  `,
  styles: ['.alert {max-width: 500px; margin: 0 auto;}', 'button:focus,button:hover {outline:none; background: beige}']
})
export class CustomButtonComponent  {
  @Input() content = 'Default';
  @Input() type = 'success';
  @Output() closed = new EventEmitter();

  show = true;

}
