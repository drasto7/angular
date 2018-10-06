import {Directive,HostListener,HostBinding} from '@angular/core'
@Directive({
 selector: '[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') toggleOpen = false;
 
    @HostListener('click') onclick(){
          //  window.alert('Host Element Clicked');
            this.toggleOpen=!this.toggleOpen;
    }

}