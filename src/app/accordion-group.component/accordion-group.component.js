"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_component_1 = require("../accordion.component/accordion.component");
var AccordionGroupComponent = (function () {
    function AccordionGroupComponent(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this.accordion.addGroup(this);
    }
    Object.defineProperty(AccordionGroupComponent.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOthers(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionGroupComponent.prototype.toggleOpen = function (event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    };
    return AccordionGroupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordionGroupComponent.prototype, "heading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionGroupComponent.prototype, "isOpen", null);
AccordionGroupComponent = __decorate([
    core_1.Component({
        selector: 'accordion-group',
        templateUrl: './accordion-group.component.html',
        styleUrls: ['./accordion-group.component.css']
    }),
    __metadata("design:paramtypes", [accordion_component_1.AccordionComponent])
], AccordionGroupComponent);
exports.AccordionGroupComponent = AccordionGroupComponent;
//# sourceMappingURL=accordion-group.component.js.map