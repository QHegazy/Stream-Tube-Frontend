import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then(
            (component) => component.HomeComponent,
          ),
          pathMatch: 'full',
      },
    {
        path: 'not-found',
        loadComponent: () =>
          import('./not-found/not-found.component').then(
            (component) => component.NotFoundComponent,
          ),
        pathMatch: 'full',
      },

      { path: 'home', redirectTo: '' },
      { path: '**', redirectTo: 'not-found' },
];
