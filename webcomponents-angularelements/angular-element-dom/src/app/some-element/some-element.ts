import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-some-element',
  templateUrl: './some-element.html'
})
export class SomeElementComponent implements OnInit {
  @Input()
  message = 'lorem ipsum';

  count = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    document.body.addEventListener('my-send-message', (ev: CustomEvent) => {
      console.log('custom event message: ', ev, this);
      this.count++;
      if (ev.detail) {
        this.message = ev.detail.message;
      }
    });
  }

  @Input()
  public doSomethingExternal() {
    if ((<any> this).ngElementStrategy) {
      const instance = (<any> this).ngElementStrategy.componentRef.instance;
      instance.doSomething();
      instance.cdr.detectChanges();
    } else {
      this.doSomething();
    }
  }
  public doSomething() {
    console.log('>doSomething called! ', this, this.count)
    this.count ++;
    console.log('<count ', this.count)
  }
}
