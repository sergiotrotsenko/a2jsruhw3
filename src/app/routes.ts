/**
 * Created by sergio on 6/11/17.
 */
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { Routes} from '@angular/router';

 export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];
