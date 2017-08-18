"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.groups = [];
    }
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    return AccordionComponent;
}());
AccordionComponent = __decorate([
    core_1.Component({
        selector: 'accordion',
        template: '<ng-content></ng-content>',
        host: {
            'class': 'panel-group'
        }
    })
], AccordionComponent);
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map