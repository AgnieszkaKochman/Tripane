import {Component, Input} from '@angular/core';

import {AccordionComponent} from '../accordion.component/accordion.component';

@Component({
    selector: 'accordion-group',
    templateUrl: './accordion-group.component.html',
    styleUrls: [ './accordion-group.component.css' ]
})
export class AccordionGroupComponent {
   private _isOpen: boolean = false;

   @Input() heading: string;
   @Input()
   set isOpen(value: boolean) {
       this._isOpen = value;
       if (value) {
           this.accordion.closeOthers(this);
       }
   } 

   get isOpen() {
       return this._isOpen;
   }

   constructor(private accordion: AccordionComponent) {
       this.accordion.addGroup(this);
   }

   toggleOpen(event: MouseEvent): void {
       event.preventDefault();
       this.isOpen = !this.isOpen;
   }
}