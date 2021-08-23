import { Directive, ElementRef } from '@angular/core';

// Modificar el comportamiento de un elemento 
// 1. se requiere ElementRef
// 2. hacer una injection de depencias 

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private elementRef: ElementRef
  ) { 

    // Modificamos su comportamiento en el DOM
    elementRef.nativeElement.style.backgroundColor = 'purple';
  }

}
