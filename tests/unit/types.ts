// types.ts
import { IError } from './error';

export enum AuthStatus {
  Success,
  Unauthorized,
  Forbidden,
  NotFound,
  InternalServerError,
}

export enum AuthenticationMethod {
  Bearer,
  OAuth2ClientCredentials,
  OAuth2Password,
}

export enum ClientType {
  Web,
  Mobile,
  Desktop,
}

export interface IAuthRequest {
  authenticationMethod: AuthenticationMethod;
  clientType: ClientType;
  credentials: {
    grantType: string;
    username: string;
    password: string;
  };
}

export interface IAuthResponse {
  authenticationMethod: AuthenticationMethod;
  clientType: ClientType;
  credentials: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    scope: string;
  };
}

export interface IAuthGatewayOptions {
  logLevel: 'debug' | 'error' | 'info';
  port: number;
  hosts: string[];
  jwtSecret: string;
  authenticationMethods: AuthenticationMethod[];
  clientTypes: ClientType[];
}

export interface IError extends Error {
  code: number;
  status: AuthStatus;
}