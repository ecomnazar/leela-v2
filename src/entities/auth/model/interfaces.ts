export interface IAuthorizationApiProps {
  code: string;
  redirectUri: string;
  provider: "GOOGLE";
}

export interface IIAuthorizationApiResponse {
  accessToken: string;
  refreshToken: string;
}
