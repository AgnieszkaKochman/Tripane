import {Component, Input} from '@angular/core';

import {AccordionGroupComponent} from '../accordion-group.component/accordion-group.component';

@Component({
    selector: 'accordion',
    template: '<ng-content></ng-content>',
    host: {
        'class': 'panel-group'
    }
})
export class AccordionComponent {
    groups: Array<AccordionGroupComponent> = [];

    addGroup(group: AccordionGroupComponent): void {
        this.groups.push(group);
    }

    closeOthers(openGroup: AccordionGroupComponent): void {
        this.groups.forEach((group: AccordionGroupComponent) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
}