import { ErrorTracingType, JSONRPCRequest } from '@mihanizm56/fetch-api';

export type LoggerServiceParams = {
  errorType: ErrorTracingType;
  userRequest: string;
  userResponse: string;
  formattedResponse: string;
};

export type FetchLoggerParamsType = {
  loggerEndpoint: string;
  Requestor: typeof JSONRPCRequest;
};

export abstract class ILogger<InitParamsType, SendEventParamsType> {
  public abstract init: (params: InitParamsType) => void;
  public abstract sendEvent: (params: SendEventParamsType) => void;
}
