import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/Components/login/login.component').then(
        (a) => a.LoginComponent
      ),
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('../app/Components/browse/browse.component').then(
        (a) => a.BrowseComponent
      ),
  },
];
