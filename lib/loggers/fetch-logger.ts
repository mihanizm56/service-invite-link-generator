import {
  JSONRPCRequest,
  SetResponseTrackCallbackOptions,
} from '@mihanizm56/fetch-api';
import { loggerRequest } from '../api/logger-request';
import { createLoggerRequestOptions } from '../utils/create-logger-request-options';

type ParamsType = {
  loggerEndpoint: string;
  Requestor: typeof JSONRPCRequest;
};

export const fetchLogger = ({
  loggerEndpoint: endpoint,
  Requestor,
}: ParamsType) => async (loggerMainParams: SetResponseTrackCallbackOptions) => {
  try {
    // if there is no error - do not make logging
    if (!loggerMainParams.error) {
      return;
    }

    const params = createLoggerRequestOptions(loggerMainParams);

    const { error, errorText } = await loggerRequest({
      params,
      endpoint,
      Requestor,
    });

    if (error) {
      throw new Error(errorText);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('(service-fetch-logger): get error in request ', error);
  }
};
