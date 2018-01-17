import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCor]'
})
export class CorDirective {

  constructor(
      elementRef: ElementRef) {
    // tslint:disable-next-line:no-console

    elementRef.nativeElement.lang = 'pt-BR';
    elementRef.nativeElement.style.color = 'green';
   }


   // repetitivo!!!!

    // @HostListener('click') onCallback1() {
    //     console.log('cliquei!!!');
    // }

    // @HostListener('mouseleave') onCallback2() {
    //     console.log('passei o mouse!!');
    // }

    // @HostListener('mouseover') onCallback3() {
    //     console.log('tirei o mouse!!');
    // }

    // simplificando
    // @HostListener(['click'] ['$event'])
    // @HostListener('mouseleave', ['$event'])
    // @HostListener('mouseover', ['$event']) onEvent(event) {
    //     console.log('evento disparado! ', event);
    // }

    @HostListener('click') onHover() {
       console.log('hover');
      }
}
