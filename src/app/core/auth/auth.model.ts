/**
 * Store for Auth
 */
export interface AuthState {
  currentUser: CurrentUser|null;
  token: string|null;
  loading: boolean;
  loggedIn: boolean;
  errorMessage: string|null;
  redirectUrl: string;
}

/**
 * Current logged-in user
 */
export interface CurrentUser {
  readonly id: number | string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly roles: Array<string>;
}

/**
 * Credentials for user authentication
 */
export interface AuthCredentials {
  readonly username: string;
  readonly password: string;
  readonly remember: boolean;
}
