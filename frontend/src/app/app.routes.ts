import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', // Ahora Vantage Point inicia en el Login
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'summary',
    loadComponent: () => import('./features/finance/pages/summary/summary.page').then( m => m.SummaryPage)
  },
  // La ruta 'welcome' puedes dejarla si planeas usarla como intro
  {
    path: 'welcome',
    loadComponent: () => import('./features/auth/pages/welcome/welcome.page').then( m => m.WelcomePage)
  },
];