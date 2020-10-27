import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { TestWebComponent } from './test-web-component/test-web.component';

@NgModule({
  declarations: [ // no more AppComponent
    TestWebComponent
  ], imports: [
    BrowserModule
  ], providers: [],
  entryComponents: [TestWebComponent]
  // this was before , bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    customElements.define('test-component',
      createCustomElement(TestWebComponent, {
        injector: this.injector
      }));
  }
}

