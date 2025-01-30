import { Routes } from '@angular/router';
import { LandingPageComponent } from './menu/landing-page/landing-page.component';
import { Page1Component } from './body/page1/page1.component';
import { Page2Component } from './body/page2/page2.component';

export const routes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: '', component: LandingPageComponent},
];
