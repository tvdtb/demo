import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SomeElementComponent } from './some-element/some-element';

@NgModule({
  declarations: [
    SomeElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [SomeElementComponent]
  // not needed:  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const someElementClass = createCustomElement(SomeElementComponent, { injector: this.injector});
    customElements.define('app-some-element', someElementClass);
  }
}
