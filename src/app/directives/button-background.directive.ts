import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonBackground]'
})
export class ButtonBackgroundDirective implements OnInit{

  constructor(private el: ElementRef,
  public rend: Renderer2) { }

@HostListener('mouseenter')
onMouseenter() {
    this.changebgColor('rgb(215, 72, 92)')
}
@HostListener('mouseleave')
onMouseleave() {
this.changebgColor('rgb(113, 8, 30)')
}

  ngOnInit() {
    this.changebgColor('rgb(113, 8, 30)')
  }

changebgColor (color: string) {
  this.rend.setStyle(this.el.nativeElement, 'background', color)

}

}
