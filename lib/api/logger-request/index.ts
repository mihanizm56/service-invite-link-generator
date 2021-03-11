import { JSONRPCRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig, RequestParamsType } from './make-request-config';

type OutputType = {
  error: boolean;
  errorText: string;
  data: any;
  additionalErrors: Record<string, any> | null;
  code: number;
};

export const loggerRequest = ({
  params,
  Requestor,
  endpoint,
}: RequestParamsType & { Requestor: typeof JSONRPCRequest }): Promise<
  OutputType
> => new Requestor().makeRequest(makeRequestConfig({ endpoint, params }));
