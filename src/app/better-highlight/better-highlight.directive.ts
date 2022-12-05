import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // @HostBinding('style.backgroundColor') backgrondColor: string = this.defaultColor;

  @HostBinding('style.backgroundColor') backgrondColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  this.backgrondColor = this.defaultColor;
  }

  // @HostListener('mouseenter') mouseover(eventData: Event) {
    
  // }

  // @HostBinding('style.backgroundColor') backgrondColor: string;

  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  // }

  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  // }


  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   this.backgrondColor = 'blue';
  // }

  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.backgrondColor = 'transparent';
  // }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgrondColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgrondColor = this.defaultColor;
  }

}
