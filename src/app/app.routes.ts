import { Routes } from '@angular/router';
import { LoginScreen } from './login-screen/login-screen';

export const routes: Routes = [
  {
    path: '',
    component: LoginScreen
  },
  {
    path: 'login',
    component: LoginScreen
  }

];
