import { RestRequest, IResponse } from '@mihanizm56/fetch-api';
import { makeRequestConfig, RequestParamsType } from './make-request-config';

export const loggerRequest = (params: RequestParamsType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(params));
