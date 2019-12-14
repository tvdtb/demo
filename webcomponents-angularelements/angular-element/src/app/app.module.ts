import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CustomButtonComponent } from './custom-button/custom-button.component';
import { customElementPlease } from './webcomponent-creating-process';

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

    // const newNgElement = customElementPlease(CustomButtonComponent,  this.injector)
    customElements.define('my-button', ngElement);
    // customElements.define('my-button', newNgElement);
  }
}
