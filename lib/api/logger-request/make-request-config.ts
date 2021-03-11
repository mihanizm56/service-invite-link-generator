import { LoggerServiceParams, RequestorParamsType } from '../../types';
import { responseSchema } from './response-schema';

export type RequestParamsType = {
  params: LoggerServiceParams;
  endpoint: string;
};

export const makeRequestConfig = ({
  params,
  endpoint,
}: RequestParamsType): RequestorParamsType => ({
  endpoint,
  responseSchema,
  body: { params },
  isErrorTextStraightToOutput: true,
  tracingDisabled: true,
});
