import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingMenuComponent } from './landing-menu/landing-menu.component';
import { LandingMenuOriginalComponent } from './landing-menu-original/landing-menu-original.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCardComponent,
    LandingPageComponent,
    LandingMenuComponent,
    LandingMenuOriginalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
