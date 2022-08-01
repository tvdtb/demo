import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CustomButtonComponent } from './custom-element.component';

@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CustomButtonComponent], //expliziter Aufruf an Angular Komponente inital zu laden
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ngElement = createCustomElement(CustomButtonComponent, {
      injector: this.injector
    });
    customElements.define('my-custom-element', ngElement);
  }
}
