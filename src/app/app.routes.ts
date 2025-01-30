import { Routes } from '@angular/router';
import { CalculatriceComponent } from './body/calculatrice/calculatrice.component';

export const routes: Routes = [
  {path: 'Calculatrice', component: CalculatriceComponent},
  {path: '', component: CalculatriceComponent},
];
