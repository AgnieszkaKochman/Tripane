"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserPageComponent = (function () {
    function UserPageComponent() {
        this.user = {
            userId: 1,
            email: "user@email.pl",
            login: "user1",
            password: "user123",
            role: "user",
            name: "Anna",
            surname: "Kowalska",
            phone: "123-456-789",
            birthDate: new Date(1987, 10, 28),
            photoUrl: "assets/images/user.jpg",
            description: "Lorem ipsum dolor sit amet"
        };
    }
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    core_1.Component({
        selector: 'user-page',
        templateUrl: './user-page.component.html',
        styleUrls: ['./user-page.component.css']
    })
], UserPageComponent);
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=user-page.component.js.map