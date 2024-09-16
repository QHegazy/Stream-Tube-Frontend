import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (component) => component.DashboardComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'content',
    loadComponent: () =>
      import('./content/content.component').then(
        (component) => component.ContentComponent
      ),
    pathMatch: 'full',
  },

  {
    path: 'analytics',
    loadComponent: () =>
      import('./analytics/analytics.component').then(
        (component) => component.AnalyticsComponent
      ),
    pathMatch: 'full',
  },
  // {
  //   path: 'settings',
  //   loadComponent: () =>
  //     import('./settings/settings.component').then(
  //       (component) => component.SettingsComponent
  //     ),
  //   pathMatch: 'full',
  // },
  {
    path: 'content',
    loadComponent: () =>
      import('./content/content.component').then(
        (component) => component.ContentComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'comments',
    loadComponent: () =>
      import('./comments/comments.component').then(
        (component) => component.CommentsComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'subtitles',
    loadComponent: () =>
      import('./subtitles/subtitles.component').then(
        (component) => component.SubtitlesComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./help-component/help-component.component').then(
        (component) => component.HelpComponentComponent
      ),
    pathMatch: 'full',
  },

  {
    path: 'not-found',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (component) => component.NotFoundComponent
      ),
    pathMatch: 'full',
  },

  { path: 'dashboard', redirectTo: '' },
  { path: '**', redirectTo: 'not-found' },
];
