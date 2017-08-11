import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }           from './app.component';
import { HeaderComponent }        from './header.component/header.component';
import { FooterComponent }        from './footer.component/footer.component';
import { HomeComponent }           from './home.component/home.component';
import { SimpleSearchComponent }  from './simple-search.component/simple-search.component';
import { TripsComponent }         from './trips.component/trips.component';
import { AboutTripaneComponent }  from './about-tripane.component/about-tripane.component';
import { LoginPageComponent }     from './login-page.component/login-page.component';

@NgModule({
imports:  [ BrowserModule,
            RouterModule.forRoot([
              {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
              },
              {
                path: 'home',
                component: HomeComponent
              },
              {
                path: 'login',
                component: LoginPageComponent
              }
            ]) 
          ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  SimpleSearchComponent,
                  TripsComponent,
                  AboutTripaneComponent,
                  FooterComponent,
                  LoginPageComponent,
                  HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
