import { Directive, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[scrollToInvalidField]'
})
export class ScrollToInvalidFieldDirective {
  @HostListener('click') onClick() {
    const elementList = document.querySelectorAll('input.ng-invalid');
    const element = elementList[0] as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
