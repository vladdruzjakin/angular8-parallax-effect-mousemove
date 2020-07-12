import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[parallaxItem]',
})
export class ParallaxItemDirective implements OnInit {
  @Input() top;
  @Input() left;
  @Input() rotate = 30;
  @Input() opacity = 1;
  constructor(private eleRef: ElementRef) {}

  ngOnInit(): void {
    this.eleRef.nativeElement.style.position = 'absolute';
    this.eleRef.nativeElement.style.top = this.top;
    this.eleRef.nativeElement.style.left = this.left;
    this.eleRef.nativeElement.style.transform = `translate(0px, 0px) rotate(${ this.rotate }deg)`;
    this.eleRef.nativeElement.style.opacity = this.opacity;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {

    const cursorX = e.pageX;
    const cursorY = e.pageY;
    const movementConstant = 0.025;

    const newX = cursorX * movementConstant;
    const newY = cursorY * movementConstant;

    this.eleRef.nativeElement.style.transform = `translate(${ newX }px, ${ newY }px) rotate(${ this.rotate }deg)`;
  }
}
