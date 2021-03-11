export type LoggerMainParamsType = {
  endpoint: string;
  method: Pick<RequestInit, 'method'>;
  requestBody: Pick<RequestInit, 'body'>;
  requestHeaders: Record<string, string>;
  requestCookies: string;
  response: Response;
  responseBody: any; // because we dont know about response body type yet
  formattedResponse: any; // because we dont know about response body type yet
  responseHeaders: Record<string, string>;
  error: boolean;
  errorType: string;
  code: number;
};

export type LoggerServiceParams = {
  errorType: string;
  userRequest: string;
  userResponse: string;
  formattedResponse: string;
};
