import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductStyle]'
})
export class ProductStyleDirective implements OnChanges {

  @Input('appProductStyle') newClass: string = '';
  constructor(public _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'shadow');
    // this._renderer.addClass(this._elementRef.nativeElement, 'border-danger');
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['newClass']) {
      this._renderer.addClass(this._elementRef.nativeElement, this.newClass);
      }
    // this._renderer.setStyle(this._elementRef.nativeElement, 'border-radius', this.borderReduis);

  }
  @HostListener('mouseover')
  func1() {
    this._renderer.addClass(this._elementRef.nativeElement, 'shadow-lg');
    // this._elementRef.nativeElement.style.borderRadius = this.borderReduis;

  }
  @HostListener('mouseout')
  func2() {
    this._renderer.removeClass(this._elementRef.nativeElement, 'shadow-lg');
    // this._elementRef.nativeElement.style.borderRadius = '0';
  }

}
