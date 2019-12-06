import { ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';

export function customElementPlease(component, injector) {
    class NgElement extends HTMLElement {

      componentRef;

      static observedAttributes = [];

      constructor() {
        super();
      }

      connectedCallback() {
          if (!this.componentRef){
              this.componentRef = initializeComponent(this, component, injector)
          }
      }
        
      attributeChangedCallback(attrName, oldValue, newValue){
          if (!this.componentRef){
            this.componentRef = initializeComponent(this, component, injector)
          }
      }

      disconnectedCallback() {}
    }
  
    return NgElement;
  }

  function getComponentFactory(component, injector){
      const componentFactoryResolver = injector.get(ComponentFactoryResolver)
      return componentFactoryResolver.resolveComponentFactory(component);
  }

  function initializeComponent(element, component, injector){
      const childInjector = Injector.create({providers: [], parent: injector});
      const componentFactory = getComponentFactory(component, injector);
      const projectableNodes = [];
      let componentRef = componentFactory.create(childInjector, projectableNodes, element);
      componentRef.changeDetectorRef.detectChanges();
      const applicationRef = injector.get(ApplicationRef);
      applicationRef.attachView(componentRef.hostView)

      return componentRef;
  }