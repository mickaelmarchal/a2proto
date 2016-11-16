import { AuthActions } from './core/auth/auth.actions';
import { AuthRequestService, AuthService } from './core/auth/auth.service';

//TODO move that to core
import {provideAuth } from 'angular2-jwt';

export const APP_PROVIDERS = [
  AuthActions,
  AuthService,
  AuthRequestService, //TODO move that to core + should be a private service

  //TODO move that to core
  provideAuth({
    //tokenGetter: () => localStorage.getItem(tokenName),
    noJwtError: false
  })
];
