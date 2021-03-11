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
}: RequestParamsType & { Requestor: any }): Promise<OutputType> =>
  new Requestor().makeRequest(makeRequestConfig({ endpoint, params }));
