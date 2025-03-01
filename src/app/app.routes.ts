import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./Modules/home/home.component').then(m => m.HomeComponent) },
      { path: "**", redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
