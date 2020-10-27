import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-web-component',
  templateUrl: './test-web.component.html'
})
export class TestWebComponent implements OnInit {

  private myValue: any;
  public logs: string[] = [];

  @Output()
  event = new EventEmitter();

  @Input()
  set value(v: any) {
    this.myValue = v;
    this.pushLog('set value ' + v);
  }

  get value(): any {
    return this.myValue;
  }

  constructor() { }

  ngOnInit(): void {
    this.pushLog('ngOnInit');
  }

  pushLog(msg: string): void {
    this.logs.push(msg);
  }

  clicked(): void {
    this.pushLog('clicked ' + new Date());
    this.event.emit({ value: this.myValue});
  }
}
