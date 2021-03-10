import { LoggerMainParamsType, LoggerServiceParams } from '../types';
import { getFilteredCookies } from './get-filtered-cookies';

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
  const filteredRequestCookies = getFilteredCookies(requestCookies);
  // const filteredRequestCookies = getFilteredCookies(requestCookies);

  const userRequestParams = {
    endpoint,
    method,
    requestBody,
    requestHeaders,
    requestCookies: filteredRequestCookies,
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
