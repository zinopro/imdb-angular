import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[noImg]',
  host: {
    '(error)': 'removeImage()'
  }
})
export class NoImgDirective {

  constructor(private el: ElementRef) {}

  removeImage() {
    this.el.nativeElement.parentElement.classList.add("no-image");
  }

}

