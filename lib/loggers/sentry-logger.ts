/* eslint-disable @typescript-eslint/camelcase */

import * as Sentry from '@sentry/react';
import { Severity } from '@sentry/react';
import { v4 as uuidv4 } from 'uuid';
import { getSentryConfig } from '../utils/get-sentry-config';
import { ILogger } from '../types';

const SENTRY_SDK = '@sentry/react';
const SENTRY_VERSION = '5.30.0';

type InitSentryParams = {
  dsn: string;
  release: string;
};

type SendSentryEventParamsType = {
  message: string;
  tags?: Record<string, any>;
  responseData?: Record<string, any>;
  level: keyof typeof Severity;
  request?: Record<string, any>;
  release?: string;
  extra?: Record<string, any>;
};

type SendErrorParamsType = {
  project: string;
  error: any;
  message: string;
};

export class SentryLogger extends ILogger<
  InitSentryParams,
  SendSentryEventParamsType
> {
  release?: string;
  dsn?: string;
  initialized = false;

  init = (params: InitSentryParams) => {
    const config = getSentryConfig({
      release: params.release,
      dsn: params.dsn,
    });

    Sentry.init(config);

    this.release = params.release;
    this.dsn = params.dsn;
    this.initialized = true;
  };

  sendEvent = ({
    message,
    tags,
    responseData,
    level,
    request,
    extra,
  }: SendSentryEventParamsType) => {
    const severityLevel = (Severity[level] || Severity.Error) as Severity;

    Sentry.captureEvent({
      event_id: uuidv4(),
      message,
      release: this.release,
      level: severityLevel,
      sdk: {
        name: SENTRY_SDK,
        version: SENTRY_VERSION,
      },
      tags,
      extra: {
        ...extra,
        response: JSON.stringify(responseData, null, 2),
        origin: window.origin,
      },
      request,
    });
  };

  sendError = ({ project, message, error }: SendErrorParamsType) => {
    if (error instanceof Error) {
      this.sendEvent({
        message: `@${project}/${message}`,
        level: 'Error',
        extra: {
          error,
        },
      });

      return;
    }

    if (typeof error === 'string') {
      this.sendEvent({
        message: `@${project}/${error}`,
        level: 'Error',
        extra: {
          error,
        },
      });
    }
  };
}
