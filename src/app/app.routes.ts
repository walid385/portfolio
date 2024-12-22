import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'project-webpulse',
    loadComponent: () =>
      import('./Pages/wbpulse/wbpulse.component').then((m) => m.WbpulseComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Pages/aboutpage/aboutpage.component').then((m) => m.AboutpageComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];
