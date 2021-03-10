import { IRequestParams } from '@mihanizm56/fetch-api';
import { LoggerServiceParams } from '../../types';
import { responseSchema } from './response-schema';

export type RequestParamsType = {
  params: LoggerServiceParams;
  endpoint: string;
};

export const makeRequestConfig = ({
  params,
  endpoint,
}: RequestParamsType): IRequestParams => ({
  endpoint,
  responseSchema,
  body: { params },
  isErrorTextStraightToOutput: true,
  tracingDisabled: true,
});
