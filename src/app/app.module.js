"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_2 = require("@agm/core");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component/header.component");
var footer_component_1 = require("./footer.component/footer.component");
var home_component_1 = require("./home.component/home.component");
var simple_search_component_1 = require("./simple-search.component/simple-search.component");
var trips_component_1 = require("./trips.component/trips.component");
var about_tripane_component_1 = require("./about-tripane.component/about-tripane.component");
var login_page_component_1 = require("./login-page.component/login-page.component");
var contact_component_1 = require("./contact.component/contact.component");
var contact_form_component_1 = require("./contact-form.component/contact-form.component");
var new_trip_component_1 = require("./new-trip.component/new-trip.component");
var faq_component_1 = require("./faq.component/faq.component");
var questions_component_1 = require("./questions.component/questions.component");
var search_trip_component_1 = require("./search-trip.component/search-trip.component");
var single_trip_page_component_1 = require("./single-trip-page.component/single-trip-page.component");
var single_trip_component_1 = require("./single-trip.component/single-trip.component");
var comments_section_component_1 = require("./comments-section.component/comments-section.component");
var comments_list_component_1 = require("./comments-list.component/comments-list.component");
var comment_form_component_1 = require("./comment-form.component/comment-form.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'login', component: login_page_component_1.LoginPageComponent },
                { path: 'kontakt', component: contact_component_1.ContactComponent },
                { path: 'dodaj-wycieczke', component: new_trip_component_1.NewTripComponent },
                { path: 'faq', component: faq_component_1.FAQComponent },
                { path: 'wycieczki', component: search_trip_component_1.SearchTripComponent },
                { path: 'wycieczka', component: single_trip_page_component_1.SingleTripPageComponent }
            ]),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDJLibd1hOmtwLauHA1VORvpVnz8FXWgd4'
            })
        ],
        declarations: [app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            simple_search_component_1.SimpleSearchComponent,
            trips_component_1.TripsComponent,
            about_tripane_component_1.AboutTripaneComponent,
            footer_component_1.FooterComponent,
            login_page_component_1.LoginPageComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            contact_form_component_1.ContactFormComponent,
            new_trip_component_1.NewTripComponent,
            faq_component_1.FAQComponent,
            questions_component_1.QuestionsComponent,
            search_trip_component_1.SearchTripComponent,
            single_trip_page_component_1.SingleTripPageComponent,
            single_trip_component_1.SingleTripComponent,
            comments_section_component_1.CommentsSectionComponent,
            comments_list_component_1.CommentsListComponent,
            comment_form_component_1.CommentFormComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map