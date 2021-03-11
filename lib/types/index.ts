import { ErrorTracingType } from '@mihanizm56/fetch-api';

export type LoggerServiceParams = {
  errorType: ErrorTracingType;
  userRequest: string;
  userResponse: string;
  formattedResponse: string;
};
