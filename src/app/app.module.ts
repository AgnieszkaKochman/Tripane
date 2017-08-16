import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent }             from './app.component';
import { HeaderComponent }          from './header.component/header.component';
import { FooterComponent }          from './footer.component/footer.component';
import { HomeComponent }            from './home.component/home.component';
import { SimpleSearchComponent }    from './simple-search.component/simple-search.component';
import { TripsComponent }           from './trips.component/trips.component';
import { AboutTripaneComponent }    from './about-tripane.component/about-tripane.component';
import { LoginPageComponent }       from './login-page.component/login-page.component';
import { ContactComponent }         from './contact.component/contact.component';
import { ContactFormComponent }     from './contact-form.component/contact-form.component';
import { NewTripComponent }         from './new-trip.component/new-trip.component';
import { FAQComponent }             from './faq.component/faq.component';
import { QuestionsComponent }       from './questions.component/questions.component';
import { SearchTripComponent }      from './search-trip.component/search-trip.component';
import { SingleTripPageComponent }  from './single-trip-page.component/single-trip-page.component';
import { SingleTripComponent }      from './single-trip.component/single-trip.component';
import { CommentsSectionComponent } from './comments-section.component/comments-section.component';
import { CommentsListComponent }    from './comments-list.component/comments-list.component';
import { CommentFormComponent }     from './comment-form.component/comment-form.component';
import { UserPageComponent }        from './user-page.component/user-page.component';

@NgModule({
imports:  [ BrowserModule,
            RouterModule.forRoot([
              { path: '', redirectTo: '/home', pathMatch: 'full' },
              { path: 'home', component: HomeComponent },
              { path: 'login', component: LoginPageComponent },
              { path: 'kontakt', component: ContactComponent },
              { path: 'dodaj-wycieczke', component: NewTripComponent },
              { path: 'faq', component: FAQComponent },
              { path: 'wycieczki', component: SearchTripComponent },
              { path: 'wycieczka', component: SingleTripPageComponent },
              { path: 'user', component: UserPageComponent }
            ]),
            AgmCoreModule.forRoot({
              apiKey: 'AIzaSyDJLibd1hOmtwLauHA1VORvpVnz8FXWgd4'
            }) 
          ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  SimpleSearchComponent,
                  TripsComponent,
                  AboutTripaneComponent,
                  FooterComponent,
                  LoginPageComponent,
                  HomeComponent,
                  ContactComponent,
                  ContactFormComponent,
                  NewTripComponent,
                  FAQComponent,
                  QuestionsComponent,
                  SearchTripComponent,
                  SingleTripPageComponent,
                  SingleTripComponent,
                  CommentsSectionComponent,
                  CommentsListComponent,
                  CommentFormComponent,
                  UserPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
