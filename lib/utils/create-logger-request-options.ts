import { SetResponseTrackCallbackOptions } from '@mihanizm56/fetch-api';
import { LoggerServiceParams } from '../types';
import { getFilteredCookies } from './get-filtered-cookies';
import { getFilteredHeaders } from './get-filtered-headers';

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
}: SetResponseTrackCallbackOptions): LoggerServiceParams => {
  const filteredRequestCookies = getFilteredCookies(requestCookies);
  const filteredRequestHeaders = getFilteredHeaders(requestHeaders);
  const filteredResponseHeaders = getFilteredHeaders(responseHeaders);

  const userRequestParams = {
    endpoint,
    method,
    requestBody,
    requestHeaders: filteredRequestHeaders,
    requestCookies: filteredRequestCookies,
  };

  const userResponseParams = {
    response,
    responseBody,
    responseHeaders: filteredResponseHeaders,
    code,
  };

  return {
    errorType,
    userRequest: JSON.stringify(userRequestParams),
    userResponse: JSON.stringify(userResponseParams),
    formattedResponse: JSON.stringify(formattedResponse),
  };
};
