export interface Auth {
  readonly id?: number | string;
  readonly username?: string;
  readonly token?: string;
}

export interface AuthCredentials {
  readonly username?: string;
  readonly password?: string;
  readonly remember?: boolean;
}
