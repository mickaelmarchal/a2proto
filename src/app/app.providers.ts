import { AuthActions } from './core/auth/auth.actions';
import { AuthService } from './core/auth/auth.service';

//TODO move that to core
import {provideAuth, JwtHelper} from 'angular2-jwt';

export const APP_PROVIDERS = [
  AuthActions,
  AuthService,

  //TODO move that to core
  provideAuth({
    //tokenGetter: () => localStorage.getItem(tokenName),
    noJwtError: false
  }),
  JwtHelper
];
