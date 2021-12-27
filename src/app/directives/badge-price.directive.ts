import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBadgePrice]'
})
export class BadgePriceDirective implements OnInit {

  @Input()appBadgePrice: number | undefined = 0;

  constructor(private el:ElementRef) {}
  ngOnInit(): void {
    let price = this.appBadgePrice as number;
    if(price >200){
      this.el.nativeElement.classList.add("bg-danger");
      this.el.nativeElement.textContent = "High";
    }else if(price<200){
      this.el.nativeElement.classList.add("bg-success");
      this.el.nativeElement.textContent = "Low";
    }else{
      this.el.nativeElement.classList.add("bg-primary");
      this.el.nativeElement.textContent = "Medium";
    }
  }

}
