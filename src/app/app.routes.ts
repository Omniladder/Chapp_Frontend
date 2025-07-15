import { Routes } from '@angular/router';
import { LoginScreen } from './login-screen/login-screen';
import { CreateScreen } from './create-screen/create-screen';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginScreen
  },
  {
    path: 'creation',
    component: CreateScreen
  },

];
