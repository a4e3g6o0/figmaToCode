import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';

const routes: Routes = [
  { path: 'simple-card', component: SimpleCardComponent },
  { path: 'landing-page', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
