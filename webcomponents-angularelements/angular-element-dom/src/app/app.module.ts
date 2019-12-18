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
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    // bla bla const someElementClass = this.customElementPlease(SomeElementComponent, this.injector);
    const someElementClass = createCustomElement(SomeElementComponent, { injector: this.injector});
    customElements.define('app-some-element', someElementClass);
  }


  customElementPlease(component, injector) {
    const factory = AppModule.getComponentFactory(component, injector);
    const inputs = factory.inputs;
    const attributeToPropertyInputs = this.getDefaultAttributeToPropertyInputs(inputs);

    const initializeComponent = this.initializeComponent;

    class NgElement extends HTMLElement {
      componentRef: ComponentRef<SomeElementComponent>;


      connectedCallback() {
        if ( !this.componentRef ) {
          this.componentRef = initializeComponent(this, component, injector);
        }
      }

      attributeChangedCallback(attrName, oldValue, newValue) {
        if (!this.componentRef) {
          this.componentRef = initializeComponent(this, component, injector);
        }

        const propName = attributeToPropertyInputs[attrName];
        this.setInputValue(propName, newValue);
      }

      getInputValue(name: string) {
        return this.componentRef.instance[name];
      }

      setInputValue(property, newValue) {
        this.componentRef.instance[property] = newValue;
        this.componentRef.changeDetectorRef.detectChanges();
      }

      doSomething() {
        console.log("doSomething", this.componentRef);
        this.componentRef.instance.doSomething();
        this.componentRef.changeDetectorRef.detectChanges();
      }
    }

    console.log('customElementPlease', NgElement)
    return NgElement;

  }

  static getComponentFactory(component, injector) {
    const componentFactoryResolver = injector.get(ComponentFactoryResolver);
    return componentFactoryResolver.resolveComponentFactory(component);
  }

  initializeComponent(element, component, injector) {
    console.log("initializeComponent", element)
    const childInjector = Injector.create({ providers: [], parent: injector });
    const componentFactory = AppModule.getComponentFactory(component, injector);
    const projectableNodes = [];
    const componentRef = componentFactory.create(childInjector, projectableNodes, element);
    componentRef.changeDetectorRef.detectChanges();
    const applicationRef = injector.get(ApplicationRef);
    applicationRef.attachView(componentRef.hostView);

    return componentRef;
  }

  getDefaultAttributeToPropertyInputs(inputs) {
    const attributeToPropertyInputs = {};

    inputs.forEach(({ propName, templateName }) => {
      attributeToPropertyInputs[this.camelToDashCase(templateName)] = propName;
    });

    return attributeToPropertyInputs;
  }

  camelToDashCase(input: string) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }



}
