import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingMenuComponent } from './landing-menu/landing-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';

const routes: Routes = [
  { path: 'simple-card', component: SimpleCardComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'landing-menu', component: LandingMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
