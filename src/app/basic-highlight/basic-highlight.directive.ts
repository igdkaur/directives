import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
selector: '[appBasicHighlight]'
})

// export class BasicHighlightDirective {
//   constructor(private elementRef:ElementRef) {
//     // elementRef.nativeElement // access to nativeElement,do something with it.
//   }
  
// }


export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef:ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor='green';
  }
}