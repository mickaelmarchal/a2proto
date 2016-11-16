/**
 * Store for Auth
 */
export interface UsersState {
  users: User[];
  loading: boolean;
  loaded: boolean;
  errorMessage: string|null;
}

/**
 * User model
 */
export interface User {
  readonly id?: number;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
}
