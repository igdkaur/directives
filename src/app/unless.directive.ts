import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(value:boolean) {
  if(!value) {
    this.vcRef.createEmbeddedView(this.templateRef);
  } else {
    this.vcRef.clear();
  }
}
  constructor(private templateRef:TemplateRef<any>, private vcRef: ViewContainerRef) { }

}


// get condition as input
// bind to a property unless (condition we get.)
// whenever condition changes/input parameter here changes,to execute a method
//implement setter with set keyword
// 'this directive' will sit on ngtemplate eventually so --

// access to template and where we want to render it.Both have to be injected.

// IMP property has to share the name of the directive