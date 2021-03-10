import { IResponse, JSONRPCRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig, RequestParamsType } from './make-request-config';

export const loggerRequest = (params: RequestParamsType): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(params));
