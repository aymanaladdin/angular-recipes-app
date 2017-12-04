import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') show: boolean;    
  constructor() { }
  
  @Input('appDropdown') set showDropdown(show: boolean) {
        this.show = show; 
      };

  ngOnInit(){
    this.show = false;
  }

}
