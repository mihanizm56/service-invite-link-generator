import { LoggerMainParamsType, LoggerServiceParams } from '../types';

export const createLoggerRequestOptions = ({
  endpoint,
  method,
  requestBody,
  requestHeaders,
  requestCookies,
  response,
  responseBody,
  formattedResponse,
  responseHeaders,
  errorType,
  code,
}: LoggerMainParamsType): LoggerServiceParams => {
  const userRequestParams = {
    endpoint,
    method,
    requestBody,
    requestHeaders,
    requestCookies,
  };

  const userResponseParams = {
    response,
    responseBody,
    formattedResponse,
    responseHeaders,
    code,
  };

  return {
    errorType,
    userRequest: JSON.stringify(userRequestParams),
    userResponse: JSON.stringify(userResponseParams),
  };
};
