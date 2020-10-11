import { Directive, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery-slim';

@Directive({
  selector: '[appTotalHeight]'
})
export class TotalHeightDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.minHeight = `${window.innerHeight}px`;
    $(window).on('resize', () => {
      this.el.nativeElement.style.minHeight = `${window.innerHeight}px`;
    });
  }

}
