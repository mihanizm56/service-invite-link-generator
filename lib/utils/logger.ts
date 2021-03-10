import { loggerRequest } from '@/api/logger-request';
import { LoggerMainParamsType } from '@/types';
import { createLoggerRequestOptions } from './create-logger-request-options';

type ParamsType = {
  loggerEndpoint: string;
};

export const fetchLogger = ({ loggerEndpoint: endpoint }: ParamsType) => async (
  loggerMainParams: LoggerMainParamsType,
) => {
  const params = createLoggerRequestOptions(loggerMainParams);

  try {
    const { error, errorText } = await loggerRequest({
      params,
      endpoint,
    });

    if (error) {
      throw new Error(errorText);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('(service-fetch-logger): get error in request ', error);
  }
};
