import {AuthConfig} from 'angular-oauth2-oidc';
import {configuration} from "./utils/constants";

export const authConfig: AuthConfig = {
  issuer: configuration.issuer,
  clientId: configuration.clientId,
  redirectUri: configuration.redirectUri,
  responseType: configuration.responseType,
  scope: configuration.scope,
}
