import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsLayoutComponent } from './cars-layout/cars-layout.component';
import { LandingMenuOriginalComponent } from './landing-menu-original/landing-menu-original.component';
import { LandingMenuComponent } from './landing-menu/landing-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';

const routes: Routes = [
  { path: 'simple-card', component: SimpleCardComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'landing-menu', component: LandingMenuComponent },
  { path: 'landing-menu-original', component: LandingMenuOriginalComponent },
  { path: 'cars-layout', component: CarsLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
