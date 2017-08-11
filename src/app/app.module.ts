import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header.component/header.component';
import { SimpleSearchComponent }  from './simple-search.component/simple-search.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  SimpleSearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
