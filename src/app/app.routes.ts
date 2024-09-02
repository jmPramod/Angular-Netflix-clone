import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/Components/login/login.component').then(
        (a) => a.LoginComponent
      ),
  },
];
