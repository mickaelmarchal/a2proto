import { AuthActions } from './core/auth/auth.actions';
import { AuthRequestService, AuthService } from './core/auth/auth.service';

//TODO move that to core
import {provideAuth } from 'angular2-jwt';
import {UsersService, UsersRequestService} from "./core/users/users.service";
import {UsersActions} from "./core/users/users.actions";

export const APP_PROVIDERS = [
  AuthActions,
  AuthService,
  AuthRequestService, //TODO move that to core + should be a private service
  UsersActions,
  UsersService,
  UsersRequestService,

  //TODO move that to core
  provideAuth({
    tokenGetter: () => sessionStorage.getItem('id_token'),
    noJwtError: false
  })
];
