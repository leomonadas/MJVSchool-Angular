import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPurple]'
})
export class PurpleDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'rgb(64, 20, 141)';
  }

}
