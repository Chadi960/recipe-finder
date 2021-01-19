import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective{
    //@HostBinding('className') classShow: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    private open : boolean = false;

    @HostListener('click') mouseClick(eData : Event){
       let btnEl = this.elRef.nativeElement;
       for(let i = 0; i < btnEl.childNodes.length; i++){
            if((btnEl.childNodes[i].className == 'dropdown-menu') && (!this.open)){
                this.renderer.addClass(btnEl.childNodes[i], 'show');
            }
            else{
                this.renderer.removeClass(btnEl.childNodes[i], 'show')
            }
       }
       this.open = !this.open;
    }
}